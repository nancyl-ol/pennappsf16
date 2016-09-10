var User = require("./models/user.js");
var Ride = require("./models/rides.js");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myappdatabase');