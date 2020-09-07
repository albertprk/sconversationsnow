const mongoose = require('mongoose');


const Schema = mongoose.Schema;

// A model for the each user

const userSchema = new Schema({
  username: {type: String, unique: false, minlength: 3},
  password: {type: String, required: true, minlength: 5  },
  email: {type: String, required: true, trim: true, unique: false},
  avi: { type: String },
  chatrooms: [String],
  bio: { type: String }
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
  users: [String],
  admin: {type: String},
  mentors: [String],
  messages: [messageSchema]
});


 
const User = mongoose.model('User', userSchema);
const Chatroom = mongoose.model('Chatroom', chatroomSchema);
const Message = mongoose.model('Message', messageSchema);



module.exports = { User, Chatroom, Message };