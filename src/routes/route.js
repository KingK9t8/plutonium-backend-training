const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");
const userController = require("../controllers/userController.js");

router.post("/createUser", userController.createUser);
router.get("/getUsersData", userController.getUsersData);

// router.post("/createUser", async function (req, res) {
// 	let data = req.body;
// 	let savedData = await userModel.create(data);
// 	res.send({ data: savedData });
// });

// router.get("/getUsersData", async function (req, res) {
// 	let allUsers = await userModel.find();
// 	res.send({ data: allUsers });
// });
module.exports = router;
