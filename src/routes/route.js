const express = require("express");
const router = express.Router();

//* Take input in query param as votingAge and for all the people above that age, change votingStatus as true. Also return an array consisting of only the person that can vote.

let persons = [
	{
		name: "PK",
		age: 10,
		votingStatus: false,
	},
	{
		name: "SK",
		age: 20,
		votingStatus: false,
	},
	{
		name: "AA",
		age: 70,
		votingStatus: false,
	},
	{
		name: "SC",
		age: 5,
		votingStatus: false,
	},
	{
		name: "HO",
		age: 40,
		votingStatus: false,
	},
];

router.post("/can-vote", function (req, res) {
	const votingAge = req.query.votingAge;
	const canVote = persons.map((person) => {
		person.age >= votingAge
			? (person.votingStatus = true)
			: (person.votingStatus = false);
	});
	res.send({ data: canVote });
});
router.post("/voters", function (req, res) {
	const votingAge = req.query.votingAge;
	for (person of persons) {
		person.age >= votingAge
			? (person.votingStatus = true)
			: (person.votingStatus = false);
	}
	const voters = persons.filter((person) => person.age >= votingAge);
	res.send({ data: voters });
});

module.exports = router;
