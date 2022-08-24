const express = require("express");
const router = express.Router();
const moment = require("moment");
const midFunc = require("../middlewares/assignment-middleware");
// router.use("/hello-world", function middlewareFunction(req, res, next) {
// 	const today = moment().format("DD MMMM YYYY, h:mm:ss a");
// 	const ipAdress = req.socket.localAddress;
// 	const urlPath = req.url;
// 	console.log(
// 		`User accessed the site at ${today} from ip address ${ipAdress} from url ${urlPath}`
// 	);
// 	next();
// });
router.get("/hello-world", function (req, res) {
	res.send(`User Tracking Successful`);
});
router.get("/hello", function (req, res) {
	res.send(`User Tracking Successful`);
});

module.exports = router;
