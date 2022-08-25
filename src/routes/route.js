const express = require("express");
const router = express.Router();
const controller = require("../Controllers/controllers");

router.post(
	"/createUser",
	controller.userAuthentication,
	controller.createUser
);
router.post("/createProduct", controller.createProduct);
router.post(
	"/createOrder",
	controller.userAuthentication,
	controller.createOrder
);

module.exports = router;
