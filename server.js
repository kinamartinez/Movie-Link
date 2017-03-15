//use express dependancy for node work
var express = require('express');
var app = express();

//use mongoose dependancy
var mongoose = require('mongoose');
//mongoose.connect("mongodb://localhost/beers");
//var Movie = require("./public/js/models/movieModel.js");

//use body parser middleware
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//declare port (heroku publication)
var port = /*process.env.PORT ||*/ 8080;

//setup directories for server access
app.use(express.static('public'));
app.use(express.static('node_modules'));

// error handler to catch 404 and forward to main error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// main error handler
// warning - not for use in production code!
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

//start listening
app.listen(port, function () {
	console.log(port + " is listening");
});
