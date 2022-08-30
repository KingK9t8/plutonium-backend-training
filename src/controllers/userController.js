const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
	let data = req.body;
	if (!data.mobile) return res.send("Please provide a mobile number");
	const newUserData = await userModel.create(data);
	res.send({ newUserData: newUserData });
};

const userLogin = async function (req, res) {
	const emailId = req.body.emailId;
	const password = req.body.password;
	const user = await userModel.findOne({
		emailId: emailId,
		password: password,
	});
	if (!user) return res.send("No such user exists");
	const newToken = jwt.sign(
		{
			userId: user._id.toString(),
			batch: "Plutonium",
			organisation: "FunctionUp",
		},
		"secret token for plutonium"
	);
	res.header("Token", newToken);
	res.send({ data: newToken, status: true });
};

const getUserDetails = async function (req, res) {
	const userId=req.params.userId
	const userData = await userModel.findById(userId);
	res.send({ status: true, userData: userData });
};

const updateUserData = async function (req, res) {
	const userUpdationData = req.body;
	const userUpdatedData = await userModel.findByIdAndUpdate(
		userId,
		userUpdationData,
		{ new: true }
	);
	if (!userUpdatedData) return res.send("No user data found");
	res.send({ status: true, updatedData: userUpdatedData });
};

const deleteData = async function (req, res) {
	const isDeleted = await userModel.findByIdAndUpdate(
		userId,
		{
			isDeleted: true,
		},
		{ new: true }
	);
	if (!isDeleted) return res.send("No user data found");
	res.send({ status: true, deletedData: isDeleted });
};

module.exports = {
	createUser,
	userLogin,
	getUserDetails,
	updateUserData,
	deleteData,
};
