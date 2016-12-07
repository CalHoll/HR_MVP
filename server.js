
'use strict';
var express = require('express');
var path = require('path')
var app = express();

// setting port
var port = process.env.PORT || 8080;

// serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, function() {
  console.log('Website LIVE @ ==============> http://localhost:' + port);
})



// setting up the database


// 
// var Q = require('q');
// var mongoose = require('mongoose');
// // var bcrypt = require('bcrypt-nodejs');
// // var SALT_WORK_FACTOR = 10;
//
// mongoose.connect('mongodb://localhost:8080/data/'); // does this work?
//
//
// var OpinionSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   currentWeather: {
//     type: String,
//     required: true,
//   },
//   city: {
//     type: String,
//     required: true,
//   },
//   opinion: {
//     type: String,
//     required: true,
//   }
// });

// // Create a static getOpinions method to return data
// schema.statics.getOpinions = function(page, skip, callback) {
//
//   var opinions = [],
//       start = (page * 10) + (skip * 1);
//
//   // Query the db, using skip and limit to achieve page chunks
//   Opinion.find({},'twid active author avatar body date screenname',{skip: start, limit: 10}).sort({date: 'desc'}).exec(function(err,docs){
//
//     // If everything is cool...
//     if(!err) {
//       tweets = docs;  // We got tweets
//       tweets.forEach(function(tweet){
//         tweet.active = true; // Set them to active
//       });
//     }
//
//     // Pass them back to the specified callback
//     callback(tweets);
//
//   });
//
// };
//
// // Return a Tweet model based upon the defined schema
// module.exports = Opinion = mongoose.model('Opinion', OpinionSchema);
//
//
// module.exports = function(stream, io){
//
//   // When tweets get sent our way ...
//   stream.on('data', function(data) {
//
//     // Construct a new tweet object
//     var tweet = {
//       twid: data['id'],
//       active: false,
//       author: data['user']['name'],
//       avatar: data['user']['profile_image_url'],
//       body: data['text'],
//       date: data['created_at'],
//       screenname: data['user']['screen_name']
//     };
//
//     // Create a new model instance with our object
//     var tweetEntry = new Tweet(tweet);
//
//     // Save 'er to the database
//     tweetEntry.save(function(err) {
//       if (!err) {
//         // If everything is cool, socket.io emits the tweet.
//         io.emit('tweet', tweet);
//       }
//     });
//
//   });
