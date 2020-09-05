const Bcrypt = require("bcryptjs");
const router = require("express").Router();
let { User, userSchema, Chatroom, Message } = require("../models/users.model");
const Mongoose = require("mongoose");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(async (req, res) => {
  const salt = 10;
  const username = req.body.username;
  const password = await Bcrypt.hash(req.body.password, salt);
  const email = req.body.email;
  const avi = Number(req.body.avi);
  const chatrooms = req.body.chatrooms;
    const bio = req.body.bio;

    const newUser = new User({
        username,
        password,
        email,
        avi,
        chatrooms,
        bio
    });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/login").post(async (req, res) => {
  const obj = await User.findOne({ email: req.body.email });
  Bcrypt.compare(req.body.password, obj.password, function (err, result) {
    if (result) {
      console.log("logged in ");
      res.json(obj);
    } else {
      res.json("invalid password");
    }
  });
});

router.route("/update/:id").post((req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            user.username = req.body.username;
            user.password = req.body.password;
            user.email = req.body.email;
            user.avi = Number(req.body.avi);
            user.chatrooms = req.body.chatrooms;
            user.bio = req.body.bio;

            user
                .save()
                .then(() => res.json("User updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/getuser/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user)) //then return as json ; else return error
    .catch((err) => res.status(400).json("Error: " + err));
});

// NEW: When a chatroom needs to be added for a user, a chatroom is
//      instantiated and added to the database. That chatroom is
//      then added to the users list of chatrooms

router.route("/createchatroom/:id").post((req, res) => {
  User.findById(req.params.id).then((user) => {
    const chatroomToAdd = req.body.chatroomToAdd;
    console.log(chatroomToAdd);
    const name = chatroomToAdd.name;
    const users = [user._id];
    const admin = user._id;
    const mentors = [];
    const messages = [];
    const newChatroom = new Chatroom({
      name,
      users,
      admin,
      mentors,
      messages,
    });
    console.log(newChatroom);
    newChatroom
      .save()
      .then(() => {
        const userchatrooms = user.chatrooms;
        console.log(userchatrooms);
        userchatrooms.push(Mongoose.Types.ObjectId(newChatroom._id));
        console.log(userchatrooms);
        console.log(user);
        user.chatrooms = userchatrooms;
        console.log(user);

        user
          .save()
          .then(() => res.json("Chatroom added!"))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

// Adds given message to chatroom specified in the params
router.route("/addmessage/:chatroomid").post((req, res) => {
  const user = req.body.userid;
  const text = req.body.text;
  const created_at = req.body.date;

  const newMessage = new Message({
    user,
    text,
    created_at,
  });

  Chatroom.findById(req.params.chatroomid)
    .then((chatroom) => {
      const chatroomMessages = chatroom.messages;
      chatroomMessages.push(newMessage);
      chatroom.messages = chatroomMessages;
      chatroom
        .save()
        .then(() => res.json("Message added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/getchatroom/:id").get((req, res) => {
  Chatroom.findById(req.params.id)
    .then((chatroom) => res.json(chatroom))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.password = req.body.password;
            user.userType = req.body.userType;
            user.email = req.body.email;
            user.xp = Number(req.body.xp);
            user.studentid = Number(req.body.studentid);
            user.avi = Number(req.body.avi);

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/getchatrooms").get((req, res) => {
  Chatroom.find()
    .then((chatrooms) => res.json(chatrooms))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/deletechatroom/:id").delete((req, res) => {
  Chatroom.findByIdAndDelete(req.params.id)
    .then(() => res.json("Chatroom deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/chatroom/:id").get((req, res) => {
  Chatroom.findById(req.params.id)
    .then((chatroom) => {
      const listOfUserIds = chatroom.users;
      const obj_ids = listOfUserIds.map(function (id) {
        return Mongoose.Types.ObjectId(id);
      });
      User.find({
        _id: { $in: listOfUserIds },
      }).then((newArray) => {
        chatroom.users = newArray;
        res.json(chatroom);
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addchatuser/:userid/:chatroomid").post((req, res) => {
  User.findById(req.params.userid)
    .then((user) => {
      const userChatrooms = user.chatrooms;
      Chatroom.findById(req.params.chatroomid)
        .then((chatroom) => {
          const chatroomUsers = chatroom.users;
          const chatroomMentors = chatroom.mentors;
          if (userChatrooms.indexOf(chatroom._id) > -1) {
            res.json("The user is already in the chatroom");
            return;
          }
          chatroomUsers.push(user._id);
          userChatrooms.push(chatroom._id);
          

          if (req.body.mentor) {
            chatroomMentors.push(user._id);
          }
          user.chatrooms = userChatrooms;
          chatroom.users = chatroomUsers;
          chatroom.mentors = chatroomMentors;
          
          
          user.save()
            .then(() => {
              chatroom.save()
                .then(() => res.json("User and chatroom updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
            })
            .catch((err) => res.status(400).json("Error: " + err)); 
        })
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
})

module.exports = router;
