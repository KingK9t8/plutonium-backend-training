const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
	try {
		let data = req.body;
		if (!data.mobile) return res.status(400).send("Please provide a mobile number");
		const newUserData = await userModel.create(data);
		res.status(201).send({ newUserData: newUserData });
	} catch (error) {
		res.status(500).send({ msg: "Internal Server Error", error: error });
	}
};

const userLogin = async function (req, res) {
	try {
		const emailId = req.body.emailId;
		const password = req.body.password;
		const user = await userModel.findOne({
			emailId: emailId,
			password: password,
		});
		if (!user) return res.status(400).send("Email Id or Password is incorrect");
		const newToken = jwt.sign(
			{
				userId: user._id.toString(),
				batch: "Plutonium",
				organisation: "FunctionUp",
			},
			"secret token for plutonium"
		);
		res.header("Token", newToken);
		res.status(201).send({ data: newToken, status: true });
	} catch (error) {
		res.status(500).send({ msg: "Internal Server Error", error: error });
	}
};

const getUserDetails = async function (req, res) {
	try {
		const userId = req.params.userId;
		const userData = await userModel.findById(userId);
		res.status(202).send({ status: true, userData: userData });
	} catch (error) {
		res.status(500).send({ msg: "Internal Server Error", error: error });
	}
};

const updateUserData = async function (req, res) {
	try {
		const userId = req.params.userId;
		const userUpdationData = req.body;
		const userUpdatedData = await userModel.findByIdAndUpdate(
			userId,
			userUpdationData,
			{ new: true }
		);
		if (!userUpdatedData) return res.status(404).send("No user data found");
		res.send({ status: true, updatedData: userUpdatedData });
	} catch (error) {
		res.status(500).send({ msg: "Internal Server Error", error: error });
	}
};

const deleteData = async function (req, res) {
	const userId = req.params.userId;
	try {
		const isDeleted = await userModel.findByIdAndUpdate(
			userId,
			{ isDeleted: true },
			{ new: true }
		);
		if (!isDeleted) return res.status(404).send("No user data found");
		res.status(202).send({ status: true, deletedData: isDeleted });
	} catch (error) {
		res.status(500).send({ msg: "Internal Server Error", error: error });
	}
};
module.exports = {
	createUser,
	userLogin,
	getUserDetails,
	updateUserData,
	deleteData,
};
