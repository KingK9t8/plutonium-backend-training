const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const middleware = require("../middlewares/middleware");

router.use("/user", middleware.authJs);

router.post("/register", userController.createUser);
router.post("/login", userController.userLogin);
router.get(
	"/user/:userId",
	middleware.authorisation,
	middleware.isUserPresent,
	userController.getUserDetails
);
router.put(
	"/user/:userId",
	middleware.authorisation,
	middleware.isUserPresent,
	userController.updateUserData
);
router.delete(
	"/user/:userId",
	middleware.authorisation,
	middleware.isUserPresent,
	userController.deleteData
);

module.exports = router;
