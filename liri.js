require("dotenv").config();
var keys = require("./key");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys);

spotify
  .search({ type: "track", query: "All the Small Things" })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });

//commands concert-this, spotify-this-song, movie-this, do-what-it-says

//_____
//concert-this
//search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following info:
//name of venue
//venue location
//date of event (use moment to format this as "MM/DD/YYYY")
//*no need to sign up for a Bands in Town api_id key, use codingbootcamp as your app_id (EX: https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp)

//_____
//node liri.js spotify-this-song '<song name here>'
if (process.argv[2] === "spotify-this-song") {
  if (process.argv[3]) {
    console.log(process.argv[3]);
  } else {
    console.log("The Sign");
  }
}
//this with show following info in terminal:
//artist(s)
//the song name
//a preview link of the song from spotify
//the album that the song came from
//if no song is provided then program will default to "The Sign" by Ace of Base
//use the node-spotify-api package to retrieve song info from the Spotify API
// you'll need the ID and SECRET to use the Spotify API and the node-spotify-api package.

//_____
//node liri.js movie-this '<movie name here>'
//will display...
//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!
//You'll use the axios package to retrieve data from the OMDB API, use API= trilogy

//_____
// node liri.js do-what-it-says
// Using the fs Node package,
//LIRI will take the text inside of random.txt
//and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way,"
//as follows the text in random.txt.
// Edit the text in random.txt to test out the
//feature for movie-this and concert-this.

//_____
//BONUS
// In addition to logging the data to your terminal/bash window,
//output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.
// Do not overwrite your file each time you run a command.

//edit readme file
//add to portfolio
