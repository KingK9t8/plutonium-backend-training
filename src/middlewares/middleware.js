const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const authJs = async function (req, res, next) {
	let token = req.headers["x-Auth-token"];
	if (!token) token = req.headers["x-auth-token"];
	if (!token) return res.send("Please provide a valid token");
	let decodedToken = jwt.verify(token, "secret token for plutonium");
	if (!decodedToken) return res.send("Invalid Token");
	req["verification"] = decodedToken;
	next();
};

const authorisation = async function (req, res, next) {
	const userId = req.params.userId;
	if (userId !== req.verification.userId) return res.send("Not authorised");
	next();
};

const isUserPresent = async function (req, res, next) {
    const userId=req.params.userId
    const user=await userModel.findById(userId)
    if (!user) return res.send("User not present")
    next()
};

module.exports = { authJs, authorisation ,isUserPresent};
