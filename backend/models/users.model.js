
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// A model for the each user

const userSchema = new Schema({
  username: {type: String, required: true, unique: true, minlength: 3},
  password: {type: String, required: true, minlength: 5  },
  userType: { type: String, required: true },  //Admin, mentor or typical user
  email: {type: String, required: true, trim: true, unique: true},
  xp: { type: Number, required: true, },
  studentid: { type: Number, required: true}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);


module.exports = User;