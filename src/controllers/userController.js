const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authJs = async function (req, res, next) {
	let token = req.headers["x-Auth-token"];
	if (!token) token = req.headers["x-auth-token"];
	if (!token) return res.send("Please provide a valid token");
	let decodedToken = jwt.verify(token, "a secret token for plutonium");
	if (!decodedToken) return res.send("Invalid Token");
	next();
};

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
		"a secret token for plutonium"
	);
	res.header("Token", newToken);
	res.send({ data: newToken, status: true });
};

const getUserDetails = async function (req, res) {
	const userId = req.params.userId;
	const user = await userModel.findById(userId);
	if (!user) return res.send("No user data found");
	const userData = await userModel.findById(userId);
	res.send({ status: true, userData: userData });
};

const updateUserData = async function (req, res) {
	const userId = req.params.userId;
	const user = await userModel.findById(userId);
	if (!user) return res.send("No user data found");
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
	const userId = req.params.userId;
	const user = await userModel.findById(userId);
	if (!user) return res.send("No user data found");
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
	authJs,
	createUser,
	userLogin,
	getUserDetails,
	updateUserData,
	deleteData,
};
