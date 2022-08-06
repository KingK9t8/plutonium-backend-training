const express = require("express");
const abc = require("../util/helper");
const router = express.Router();

router.get("/test-me", function (req, res) {
	abc.batchInfo();
	console.log(`Today's date is ${abc.currentDate}th`);
	console.log(`Current month is ${abc.currentMonth + 1}th`);
	res.send("My second ever api!");
});

router.get("/test-you", function (req, res) {
	res.send("This is the second routes implementation");
});

router.get("/give-me-students-data", function (req, res) {});
module.exports = router;
// adding this comment for no reason
