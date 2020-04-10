
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// A model for the each user

const userSchema = new Schema({
  username: {type: String, unique: true, minlength: 3},
  password: {type: String, required: true, minlength: 5  },
  userType: { type: String},  //Admin, mentor or typical user
  email: {type: String, required: true, trim: true, unique: true},
  xp: { type: Number },
  studentid: { type: Number}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);


module.exports = User;