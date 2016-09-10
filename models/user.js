var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  age: Number,
  gender: Boolean,
  occupation: String,
  number: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;