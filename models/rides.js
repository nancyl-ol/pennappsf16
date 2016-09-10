var User = require('./user.js');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var rideSchema = new Schema({
  id: Schema.Types.ObejectId,
  driver: Schema.Types.ObjectId,
  riders: [Schema.Types.ObjectId],
  from: String,
  to: String,
  date: Date,
  money: Number,
  requested: Boolean,
  accepted: Boolean,
  paid: Boolean
});

var Ride = mongoose.model('Ride', rideSchema);
module.exports = Ride;