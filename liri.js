require("dotenv").config();


//consts for my project to work
const keys = require('./keys.js');
console.log('keys.js');
const spotifyApi = require('node-spotify-api');
const twitterApi = require('twitter');
const request = require('request');


//which file do the below vars go into?
//skipping to omdb for now
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

//takes in command line arguments as string

var userInput = process.argv[2];

//get string position in array of commands 
//order of commands is node liri.js ______ thing here

 
//this variable holds the spotify /twitter /movie API 
var userSearch = userInput[3];

//switch statement -based on command, we run the corresponding request 
//debug this so that it works 
//see YOUR calculator solution 

switch(userInput) {
    case "my-tweets":
        console.log(userInput);
        //fix this below 
        // client.get('/norbyfirebase2', function(error, tweets, response) {

        //     console.log(tweets);
        //  });
        break;
    
    case "spotify-this-song": 
        console.log(userInput);
        //more steps to be added
        break;


    case "movie-this":
        console.log(userInput);
        //more steps to be added 
        break;

    case ("do-what-it-says"):
        console.log(userInput);
        //more steps to be added 
        break;

    }







