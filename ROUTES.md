`POST /api/login` check login credentials
Requires: username, password


`GET /api/users` return list of users
Requires: user filter parameters


`POST /api/users` create new user
Requires: all user parameters


`GET /api/users/:id` get specific user
Requires: user id


`PUT /api/users/:id` update user
Requires: user id


`DELETE /api/users/:id` deletes user
Requires: user id


`GET /api/trips` return trips according to specifications
Requires: trip filter parameters


`POST /api/trips` add new trip
Requires: all trip parameters


`PUT /api/trips/:id` update trips
Requires: trip id


var userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  age: Number,
  gender: Boolean,
  occupation: String,
  number: String
});



var rideSchema = new Schema({
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

