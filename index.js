var User = require("./models/user.js");
var Ride = require("./models/rides.js");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myappdatabase');

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/login', function(req, res){
  var un = req.body.username;
  var pw = req.body.password;
  User.findOne({username: un}, function(err, findResult){
    if(err | !findResult){
      res.status(400).json({error: "User does not exist!"});
    }
    else{
      if(findResult.password == pw){
        res.status(200).json({status: "accepted"})
      }
      else{
        res.status(401).json({error: "Wrong username or password!"});
      }
    }
  });
});

app.get('/api/users', function(req, res){
  User.find({}, 'name username id age gender occupation number', function(err, findResults){
    if(err){
      res.status(400).json({error: "Unable to retrieve user list!"});
    }
    else{
      res.status(200).json({users: findResults});
    }
  });
});

app.post('/api/users', function(req, res){
  var name = req.body.name;
  var username = req.body.username;
  var password = req.body.password;
  var id = mongoose.Types.ObjectId();
  var age = req.body.age;
  var gender = req.body.gender;
  var occupation = req.body.occupation;
  var number = req.body.number;

  var new_user = new User({name: name, username: username, password: password,
                           id: id, age: age, gender: gender, 
                           occupation: occupation, number: number});
  new_user.save(function (err){
    if(err){
      res.status(400).json({error: "Failed to create user!"});
    }
    else{
      res.status(201).json({status: "User created!"});
    }
  });
});

app.get('/api/users/:id', function(req, res){
  User.findOne({id: req.params.id}, 'name username id age gender occupation number', function(err, findResult){
    if(err | !findResult){
      res.status(400).json({error: "User does not exist!"});
    }
    else{
      res.status(200).json({user_with_id: findResult})
    }
  });
});

app.put('/api/users/:id', function(req, res){
  User.findOne({id: req.params.id}, function(err, findResult){
    if(err | !findResult){
      res.status(400).json({error: "User does not exist!"});
    }
    else{
      User.update({id: req.params.id}, req.body, {}, function(err, raw){
        if(err){
          res.status(400).json({error: err});
        }
        else{
          res.status(200).json({status: "Updated user!"});
        }
      });
    }
  });
});

app.delete('/api/users/:id', function(req, res){
  User.remove({id: req.params.id}, function(err){
    if(err){
      res.status(400).json({error: "Could not remove user!"});
    }
    else{
      res.status(200).json({status: "User removed!"});
    }
  });
});

app.get('/api/trips', function(req, res){
  Ride.find(req.body, function(err, findResults){
    if(err){
      res.status(400).json({error: "Unable to retrieve ride list!"});
    }
    else{
      res.status(200).json({rides: findResults});
    }
  });
});

app.post('/api/trips', function(req, res){
  var id = mongoose.Types.ObjectId();
  var driver = req.body.driver;
  var riders = req.body.riders;
  var from = req.body.from;
  var to = req.body.to;
  var date = req.body.date;
  var money = req.body.money;
  var requested = req.body.requested;
  var accepted = req.body.accepted;
  var paid = req.body.paid;

  var new_ride = new Ride({id: id, driver: driver, riders: riders, from: from
                           to: to, date: date, money: money, 
                           requested: requested, accepted: accepted
                           paid: paid});
  new_ride.save(function (err){
    if(err){
      res.status(400).json({error: "Failed to create ride!"});
    }
    else{
      res.status(201).json({status: "Ride created!"});
    }
  });
});

app.put('/api/trips/:id', function(req, res){
  Ride.findOne({id: req.params.id}, function(err, findResult){
    if(err | !findResult){
      res.status(400).json({error: "Ride does not exist!"});
    }
    else{
      Ride.update({id: req.params.id}, req.body, {}, function(err, raw){
        if(err){
          res.status(400).json({error: err});
        }
        else{
          res.status(200).json({status: "Updated ride!"});
        }
      });
    }
  });
});