var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myappdatabase');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  id: Number,
  age: Number,
  gender: Boolean,
  occupation: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;