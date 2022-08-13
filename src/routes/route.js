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
		bookingNumber: 1,
		sportId: "",
		centerId: "",
		type: "private",
		slot: "16286598000000",
		bookedOn: "31/08/2021",
		bookedFor: "01/09/2021",
	},
	{
		name: "gopal",
		dob: "1/09/1995",
		gender: "male",
		city: "delhi",
		sports: ["soccer"],
		bookingNumber: 2,
		sportId: "",
		centerId: "",
		type: "private",
		slot: "16286598000000",
		bookedOn: "31/08/2021",
		bookedFor: "01/09/2021",
	},
	{
		name: "lokesh",
		dob: "1/1/1990",
		gender: "male",
		city: "mumbai",
		sports: ["soccer"],
		bookingNumber: 3,
		sportId: "",
		centerId: "",
		type: "private",
		slot: "16286598000000",
		bookedOn: "31/08/2021",
		bookedFor: "01/09/2021",
	},
	{
		name: "kumar",
		dob: "1/1/1990",
		gender: "male",
		city: "mumbai",
		sports: ["soccer"],
		bookingNumber: 4,
		sportId: "",
		centerId: "",
		type: "private",
		slot: "16286598000000",
		bookedOn: "31/08/2021",
		bookedFor: "01/09/2021",
	},
];

/* Write an api that books a slot for a player with relevant details. The api looks like POST /players/playerName/bookings/bookingId Ensure the below conditions:
1. PlayerName and bookingId are path params You have to ensure the playerName received must exist in the players collection. If the playerName doesn’t exist in the players collection return an error message that says something relevant about player not being found.	
2. For a valid playerName check if the bookingId is already present in the player’s booking. Again, for a repeated bookingId send an error message conveying the booking was already processed. For a relevant bookingId(which is new), add the booking object from request body to bookings array */

router.post("/players/:playerName/bookings/:bookingId", function (req, res) {
	let playerName = req.params.playerName;
	let bookingId = req.params.bookingId;
	bookingId = Number(bookingId);
	let isPresent = false;
	let isBooked = false;
	let isUnique = true;
	for (player of players) {
		if (player.name === playerName) {
			if (player.bookingNumber === bookingId) {
				isBooked = true;
				break;
			}
		}
	}
	for (player of players) {
		if (player.name === playerName) {
			isPresent = true;
			break;
		}
	}
	for (player of players) {
		if (player.bookingNumber === bookingId) {
			isUnique = false;
			break;
		}
	}
	let bookingArray = [];
	if (isUnique) {
		bookingArray.push(bookingId);
		res.send(bookingArray);
	} else if (isPresent) {
		isBooked ? res.send(player) : res.send("Booking was already processed");
	} else {
		res.send("No such player exists");
	}
});

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
