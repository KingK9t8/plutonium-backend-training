const express = require("express");
const router = express.Router();

// * Write a POST /players api that creates a new player ( i.e. that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data)

let players = [
	{
		name: "manish",
		dob: "1/1/1995",
		gender: "male",
		city: "jalandhar",
		sports: ["swimming"],
	},
	{
		name: "gopal",
		dob: "1/09/1995",
		gender: "male",
		city: "delhi",
		sports: ["soccer"],
	},
	{
		name: "lokesh",
		dob: "1/1/1990",
		gender: "male",
		city: "mumbai",
		sports: ["soccer"],
	},
];

router.post("/players", function (req, res) {
	//LOGIC WILL COME HERE
	let newPlayer = req.body;
	let newPlayerName = newPlayer.name;
	// adding a flag
	let isNameRepeated = false;
	for (player of players) {
		if (player.name === newPlayerName) {
			isNameRepeated = true;
			break;
		}
	}
	isNameRepeated
		? res.send("Player exists with this name. Try another name.")
		: players.push(newPlayer);
	res.send({ data: players, status: true });
});

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// router.post("/post-query-num", function (req, res) {
// 	let requiredNum = req.query.number;
// 	let finalArr = arr.filter((x) => x > requiredNum);
// 	res.send(finalArr);
// });

// router.get("/students/:name", function (req, res) {
// 	let studentName = req.params.name;
// 	console.log(studentName);
// 	res.send(studentName);
// });

// router.get("/random", function (req, res) {
// 	res.send("hi there");
// });

// router.get("/test-api", function (req, res) {
// 	res.send("hi FunctionUp");
// });

// router.get("/test-api-2", function (req, res) {
// 	res.send("hi FunctionUp. This is another cool API");
// });

// router.get("/test-api-3", function (req, res) {
// 	res.send(
// 		"hi FunctionUp. This is another cool API. And NOw i am bored of creating API's "
// 	);
// });

// router.get("/test-api-4", function (req, res) {
// 	res.send(
// 		"hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s "
// 	);
// });

// router.get("/test-api-5", function (req, res) {
// 	res.send(
// 		"hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s "
// 	);
// });

// router.get("/test-api-6", function (req, res) {
// 	res.send({ a: 56, b: 45 });
// });

// router.post("/test-post", function (req, res) {
// 	res.send([23, 45, 6]);
// });

// router.post("/test-post-2", function (req, res) {
// 	res.send({ msg: "hi", status: true });
// });

// router.post("/test-post-3", function (req, res) {
// 	// let id = req.body.user
// 	// let pwd= req.body.password

// 	// console.log( id , pwd)

// 	console.log(req.body);

// 	res.send({ msg: "hi", status: true });
// });

// router.post("/test-post-4", function (req, res) {
// 	let arr = [12, "functionup"];
// 	let ele = req.body.element;
// 	arr.push(ele);
// 	res.send({ msg: arr, status: true });
// });

module.exports = router;
