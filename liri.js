require("dotenv").config();
const keys = require("./key");
const Spotify = require("node-spotify-api");

const spotify = new Spotify(keys.spotify);
const axios = require("axios");

//Bands In Town & moment.js

//commands concert-this, spotify-this-song, movie-this, do-what-it-says

//concert-this
if (process.argv[2] === "concert-this") {
  if (process.argv[3]) {
    let artist = process.argv[3];

    const queryUrl =
      "https://rest.bandsintown.com/artists/" +
      artist +
      "/events?app_id=" +
      keys.bands_id;
    axios
      .get(queryUrl)
      .then(function(data) {
        console.log(data.data[0].venue.name);
        console.log(
          `City: ${data.data[0].venue.city}, State: ${data.data[0].venue.region}, Country: ${data.data[0].venue.country}`
        );
        console.log(data.data[0].datetime);
        //still need to convert in moment.js to "MM/DD/YYYY"
      })
      .catch(function(err) {
        console.log(err);
      });
  } else {
    console.log("Do you even want to find a band?");
  }
}

//spotify-this-song
if (process.argv[2] === "spotify-this-song") {
  if (process.argv[3]) {
    spotify
      .search({ type: "track", query: process.argv[3] })
      .then(function(response) {
        for (i = 0; i < response.tracks.items.length; i++) {
          console.log(response.tracks.items[i].name);
          console.log(response.tracks.items[i].album.artists[0].name);
          console.log(response.tracks.items[i].album.name);
          console.log(response.tracks.items[i].external_urls.spotify);
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  } else {
    console.log("The Sign");
  }
}

//movie-this
if (process.argv[2] === "movie-this") {
  if (process.argv[3]) {
    let movieName = process.argv[3];
    const queryUrl =
      "http://www.omdbapi.com/?t=" +
      movieName +
      "&y=&plot=short&apikey=trilogy";
    axios
      .get(queryUrl)
      .then(function(response) {
        console.log(`Title: ${response.data.Title}`);
        console.log(`Year of release: ${response.data.Year}`);
        console.log(`The movie's rating is: ${response.data.Rated}`);
        console.log(`Rotten Tomatoes: ${response.data.Ratings.Value}`);
        console.log(`Country origin: ${response.data.Country}`);
        console.log(`Language: ${response.data.Language}`);
        console.log(`Plot: ${response.data.Plot}`);
        console.log(`Actors: ${response.data.Actors}`);
      })
      .catch(function(err) {
        console.log(err);
      });
  } else {
    console.log(`If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
 It's on Netflix!`);
  }
}
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
