const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authJs = async function (req, res, next) {
	try {
		let token = req.headers["x-Auth-token"];
		if (!token) token = req.headers["x-auth-token"];
		if (!token) return res.send("Please provide a valid token");
		let decodedToken = jwt.verify(token, "secret token for plutonium");
		if (!decodedToken) return res.send("Invalid Token");
		req["verification"] = decodedToken;
		next();
	} catch (error) {
		res.status(401).send({msg:"Authentication failure",error:error});
	}
};

const authorisation = async function (req, res, next) {
	try {
		const userId = req.params.userId;
		if (userId !== req.verification.userId)
			return res.status(403).send("Not authorised");
		next();
	} catch (error) {
		res.status(500).send({ msg: "Internal Server Error", error: error });
	}
};

const isUserPresent = async function (req, res, next) {
	try {
		const userId = req.params.userId;
		const user = await userModel.findById(userId);
		if (!user) return res.status(404).send("User Not Found");
		next();
	} catch (error) {
		res.status(500).send({ msg: "Internal Server Error", error: error });
	}
};

module.exports = { authJs, authorisation, isUserPresent };
