require("dotenv").config();

var keys = require('./keys.js');
console.log('keys.js');

var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);

//takes in command line arguments as string

var userInput = process.argv;

//get string position in array of commands 
//order of commands is node liri.js ______ thing here
/* node liri.js my-tweets 
node liri.js spotify-this-song
node liri.js movie-this 
node liri.js do-what-it-says 
*/ 
 
var userInputReq = inputString[2];
// vars for spotify? twitter? 


//switch statement -based on command, we run the corresponding request 

switch(userInput) {
    case "my-tweets":
        console.log("my-tweets");
        //more steps to be added 
        break;
    
    case "spotify-this-song": 
        console.log("spotify-this-song");
        //more steps to be added
        break;


    case "movie-this":
        console.log("movie-this");
        //more steps to be added 
        break;

    case ("do-what-it-says"):
        console.log("do-what-it-says");
        //more steps to be added 
        break;

    }




}


