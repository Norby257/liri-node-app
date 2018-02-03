require("dotenv").config();


//packages stored in const 
const keys = require('./keys.js');
console.log('keys.js');
const spotifyApi = require('node-spotify-api');
const twitterApi = require('twitter');
const request = require('request');
const fs = require('fs');


//which file do the below vars go into?
//skipping to omdb for now
var spotify = new spotifyApi(keys.spotify);
var client = new twitterApi(keys.twitter);

//takes in command line arguments as string

var userCommand = process.argv[2];

var userSearch = process.argv[3];

//get string position in array of commands 
//order of commands is node liri.js ______ thing here

 
//this variable holds the spotify /twitter /movie API 

//switch statement -based on command, we run the corresponding request 
//debug this so that it works 
//see YOUR calculator solution 

switch(userCommand) {
    case "my-tweets":
        console.log(userCommand);
        //fix this below 
        // client.get('/norbyfirebase2', function(error, tweets, response) {

        //     console.log(tweets);
        //  });
        break;
    
    case "spotify-this-song": 
        console.log(userCommand);
        //more steps to be added
        break;


    case "movie-this":
        console.log(userCommand);
        console.log(userSearch);
        request(`http://www.omdbapi.com/?apikey=trilogy&t= ${userSearch}`, function(error, response, body){
            if (error) {
                throw error;
                console.log(error);
            } 
                // console.log(body);
            let data = JSON.parse(body);
            console.log( `Movie Name: ${data.Title}`);
            console.log(`Movie Release Year: ${data.Year}`);
            console.log(`IMDB Rating: ${data.imdbRating}`);
            console.log( `Rotten Tomatoes Rating: ${data.Ratings[1].Value}`);
            console.log(`Production Country: ${data.Country}`);
            console.log(`Available in the following language(s): ${data.Language}`);
            console.log(`The plot: (no spoliers!) ${data.Plot}`);            
            console.log(`Starring: ${data.Actors}`);
        });
        //best way to do if it;s null? maybe define this functon and then call it here? how to best refactor it?
        break;

    case ("do-what-it-says"):
        console.log(userCommand);
        //more steps to be added 
        break;

    }







