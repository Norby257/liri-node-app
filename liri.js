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
//how can we make this take more than one word titles? what if I have a verbose song or movie title 
var userSearch = process.argv.slice(3);

//get string position in array of commands 
//order of commands is node liri.js ______ thing here

//switch statement -based on command, we run the corresponding request 
//debug this so that it works 
//see YOUR calculator solution 
function doUserCommand() {

}
    switch(userCommand) {
        case "my-tweets":
            displayTweets();
            break;
    
    case "spotify-this-song": 
        console.log(userCommand);
        console.log(userSearch);
       spotify.search({ type: `track`, query: `${userSearch}`}, function(error, data, response){
           if (err) {
               console.log(`Error occured ${error}`);
               return;
           }
            else {
               let artistName = (data.tracks.items[0].artists[0].name);
               let songName = (data.tracks.items[0].name);
               let previewUrl = (data.tracks.items[0].preview_url);
               let albumName = (data.tracks.items[0].album.name);
               console.log(`Artist: ${artistName}`);
               console.log(`Song title: ${songName}`);
                console.log(`Click here to check out the song! ${previewUrl}`);
                console.log(`Song is from this dope album: ${albumName}`);
                // let songData = data.artists[0].name;
                // console.log(songData);
                // console.log(response.tracks.items[0]);
            }

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
            console.log( `Rotten Tomatoes Rating: ${data.Ratings[1].Value}`);
            console.log(`Production Country: ${data.Country}`);
            console.log(`Available in the following language(s): ${data.Language}`);
            console.log(`The plot: (no spoliers!) ${data.Plot}`);            
            console.log(`Starring: ${data.Actors}`);
        });
        //best way to do if it;s null? maybe define this functon and then call it here? how to best refactor it?
        //pseudocode for checking if undefined 
        // if (data.Ratings[1].Value = undefined ) or 
        // if (data.Ratings[1].Value !undefined)
        //bc this will help if someone enters a movie from the 30's....or before rotten tomatoes 
        break;

    case ("do-what-it-says"):
        console.log(userCommand);
        //more steps to be added 
        fs.readFile('./random.txt', 'utf8', (error, data) => {
            if (error) throw error;
            console.log(data);
             //ok so we need to store output of this data
            let randomFileData = data;
            //and then make that data be connected to the spotify call

        });
        break;

        //for every command, output all of the data to at txt file called log.txt
        //for the bonus item, I'll need to refactor into functions first and then try it? 

        // fs.appendFile('./log.txt', 'utf8', (error, data) => {
        //     if (error) throw error;

        // });

    }
    function displayTweets() {
        console.log(userCommand);
        var params = {screen_name: 'norbyfirebase2'};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            // using tweets.length so i don't have to make 20 tweets, and not get an error 
                for (let i = 0; i < tweets.length; i++) {
                console.log(`At this time,  ${tweets[i].created_at}`);
                console.log(`Here's what you tweeted: ${tweets[i].text}`);
            }
            }
        else {
            console.log(error);
        }
    
    });
}








