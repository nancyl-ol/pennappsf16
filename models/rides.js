var User = require('./user.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myappdatabase');

var Schema = mongoose.Schema;
var rideSchema = new Schema({
  driver: User,
  riders: User[],
  from: String,
  to: String,
  date: Date
  money: Number
});

var Ride = mongoose.model('Ride', rideSchema);
module.exports = Ride;