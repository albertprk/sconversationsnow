
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// A model for the each user

const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String},
  email: {type: String}


}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);


module.exports = User;
