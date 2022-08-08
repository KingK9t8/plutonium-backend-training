const express = require("express");
const lodash = require("lodash");

const chunk = require("../chunk/chunk");
const tail = require("../tail/tail");
const union = require("../union/union");
const fromPairs = require("../fromPairs/fromPairs");

const router = express.Router() ;

router.get("/test-me", function (req, res) {
	console.log(lodash.chunk(chunk.month, 3));
	console.log(lodash.tail(tail.oddNumbers));
	console.log(lodash.union(union.num));
	console.log(lodash.fromPairs(fromPairs.moviePairs));

	res.send("My second ever api!");
});

router.get("/test-you", function (req, res) {
	res.send("This is the second routes implementation");
});

router.get("/give-me-students-data", function (req, res) {});
module.exports = router;
// adding this comment for no reason