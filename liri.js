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
             showSong();
            break;


    case "movie-this":
        displayMovieInfo();
        break;

    case ("do-what-it-says"):
        simonSays();
        
        break;
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

function displayMovieInfo() {
    if (userSearch === "") {
            console.log("Can't decide what to watch next? No worries. I got you.")
            request(`http://www.omdbapi.com/?t=Mr+Nobody`, function(error, response, body) {
            let dataMrNobody = JSON.parse(body);
            console.log(`Crisp synopsis: ${dataMrNobody}`);
            //need to deal with rotten tomatoes score being undefined 
        }
    );
    } else {
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
        }

    }

//pseudocode for checking if rotten tomatoes rating is  undefined 
// if (data.Ratings[1].Value = undefined ) or 
// if (data.Ratings[1].Value !undefined)
//bc this will help if someone enters a movie from the 30's....or before rotten tomatoes */ 

function showSong() {
    //this is not working as expected when there is not input?...not sure why 
    if(userSearch = "") {
        console.log("Here's a nice tune to add to your playlist");
        let song = "The sign"
        spotify.search({ type: `track`, query: `${song}`}, function(error,data,response){
            if(error) {
                console.log(error);
            }
            else {
                console.log(`Song is from this dope album: ${albumName}`);
            }

        });
        
       
    }

    spotify.search({ type: `track`, query: `${userSearch}`}, function(error, data, response){
        if (error) {
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
                
            }

    });
    }

    function simonSays() {
        fs.readFile('./random.txt', 'utf8', (error, data) => {
            if (error) throw error;
            console.log(data);
            let randomFileData = data;
            //and then make that data be connected to the spotify call
            //split the text and store into array, so we can just grab the elements after a specific index
            userSearch = data.split();
            console.log(userSearch[1]); 
            spotify.search({ type: `track`, query: `${userSearch}`}, function(error, data, response){
                if (error) {
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
                        
                    }
           

            });
            

        });
    }

   




