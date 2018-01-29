require("dotenv").config();

var keys = require('./keys.js');
console.log('keys.js');

var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);