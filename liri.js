require("dotenv").config();


//packages stored in const 
const keys = require('./keys.js');
console.log('keys.js');
const spotifyApi = require('node-spotify-api');
const Twitter = require('twitter');
const request = require('request');
const fs = require('fs');
// console.log(keys.twitter);

//which file do the below vars go into?
//skipping to omdb for now
var spotify = new spotifyApi(keys.spotify);
var client = new Twitter(keys.twitter);

//takes in command line arguments as string

var userCommand = process.argv[2];
//how can we make this take more than one word titles?
var userSearch = process.argv.slice(3);

//get string position in array of commands 
//order of commands is node liri.js ______ thing here

 
//this variable holds the spotify /twitter /movie API 

//switch statement -based on command, we run the corresponding request 
//debug this so that it works 
//see YOUR calculator solution 

switch(userCommand) {
    case "my-tweets":
        console.log(userCommand);
        //log out, log in. check all emails and text messages for it. appears to be just an authentication error 
        //and follow the NPM syntax, not the AJAX req, woo 
        //do stuff here , modify parameters accordingly etc 
        //took a look at API doc again - looks like this requires authentication. so either I have to provide my Twitter key or use a different request
        var params = {screen_name: 'norbyfirebase2'};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
          if (!error) {
            console.log(tweets);
            //how to get it where it;s only created at and text? 
          } else {
              console.log(error);
          }
        });
        break;
    
    case "spotify-this-song": 
        console.log(userCommand);
        console.log(userSearch);
       spotify.search({ type: `track`, query: `${userSearch}`}, function(err, data){
           if (err) {
               console.log(`Error occured ${err}`);
               return;
           }
           console.log(data);

       });
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
            //we may have to fix the rotten tomatoes one too..if not undefined, print it. cuz logs error 
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







