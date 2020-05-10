const Bcrypt = require('bcryptjs');
const router = require('express').Router();
let User = require('../models/users.model'); //requires mongoose module we created


// the first route that handles incoming HTTP get requests from the /users path
router.route('/').get((req, res) => {
    User.find() //mongoose method that gets all the users from mongoose atlas database 
        .then(users => res.json(users)) //after it finds, get all users and returns the users in json format that we got from database
        .catch(err => res.status(400).json('Error: ' + err)); // if there's error - return a error 400 with the message
});

//handles incoming HTTP post request for registering a new user. 
router.route('/add').post(async (req, res) => {
    const salt = 10;
    const username = req.body.username; //we assign the username to variable, and create new instance of username
    const password = await Bcrypt.hash(req.body.password, salt);
    const userType = req.body.userType;
    const email = req.body.email;
    const xp = Number(req.body.xp);
    const studentid = Number(req.body.studentid);
    const avi = Number(req.body.avi);

    const newUser = new User({
        username,
        password,
        userType,
        email,
        xp,
        studentid,
        avi
    });

    newUser.save() // save the new user to the databse
        .then(() => res.json('User added!')) // return prompt that user is added; else return error message
        .catch(err => res.status(400).json('Error: ' + err));
});

// Returns true if password matches what is stored in the database
// Requires a POST with email and password
router.route('/login').post(async (req, res) => {

    const obj = await User.findOne({email: req.body.email});

    Bcrypt.compare(req.body.password, obj.password , function (err, result) {
        if (result) {
            console.log("logged in ");
            res.json(obj);
        } else {
            res.json("invalid password");
        }
    })
});


// Route for updating the user's information to the database
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.password = req.body.password;
            user.userType = req.body.userType;
            user.email = req.body.email;
            user.xp = Number(req.body.xp);
            user.studentid = Number(req.body.studentid);
            user.avi = Number(req.body.avi)

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Route for deleting the specified user
router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Route for getting the specified user by using user id
router.route('/getuser/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))  //then return as json ; else return error
        .catch(err => res.status(400).json('Error: ' + err));
});




//For all these router files, need to export router
module.exports = router;