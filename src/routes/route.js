const express = require("express");
const router = express.Router();

const movie = require("../Movies/moviesArray");
const moviesObject = require("../Movies/moviesObject");

// // *Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.
// router.get('/movies',function(req,res){
// res.send(movie.movies)
// })

// // *Create an API GET /movies/:indexNumber
// router.get("/movies/:indexNumber", function (req, res) {
// 	const i = req.params;
// 	const requiredMovie = i.indexNumber;
// 	res.send(movie.movies[Number(requiredMovie)]);
// });

// // * Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message.
// router.get("/movies/:indexNumber", function (req, res) {
// 	const i = req.params;
// 	const requiredMovie = i.indexNumber;
// 	if (
// 		Number(requiredMovie) >= movie.movies.length ||
// 		Number(requiredMovie) < 0
// 	) {
// 		res.send("Couldn't find any movie!!!");
// 	} else {
// 		res.send(movie.movies[Number(requiredMovie)]);
// 	}
// });

// // *Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name.
// router.get("/films", function (req, res) {
// 	res.send(moviesObject.movies_object);
// });

// // *Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. ‘No movie exists with this id’
// router.get("/films/:filmId", function (req, res) {
// 	const i = req.params;
// 	const requiredMovie = i.filmId - 1;
// 	if (requiredMovie >= moviesObject.movies_object.length || requiredMovie < 0) {
// 		res.send("No movie exists with this id");
// 	} else {
// 		res.send(moviesObject.movies_object[Number(requiredMovie)]);
// 	}
// });

module.exports = router;
