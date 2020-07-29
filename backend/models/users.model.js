const mongoose = require('mongoose');


const Schema = mongoose.Schema;






// A model for the each user

const userSchema = new Schema({
  username: {type: String, unique: true, minlength: 3},
  password: {type: String, required: true, minlength: 5  },
  //userType: { type: String},  //Admin, mentor or typical user
  email: {type: String, required: true, trim: true, unique: true},
  //xp: { type: Number },
  //studentid: { type: Number},
  avi: { type: String },
  chatrooms: [Schema.Types.ObjectId]
}, {
  timestamps: true,
});

const messageSchema = new Schema({
  user: userSchema,
  text: { type: String },
  created_at: { type: Date, default: Date.now }
});

const chatroomSchema = new Schema({
  name: {type: String, unique: false},
  users: [userSchema],
  admin: {userSchema},
  mentors: [userSchema],
  messages: [messageSchema]
});


 
const User = mongoose.model('User', userSchema);
const Chatroom = mongoose.model('Chatroom', chatroomSchema);
const Message = mongoose.model('Message', messageSchema);



module.exports = { User, userSchema, Chatroom, Message };