const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.use("/user", userController.authJs);

router.post("/register", userController.createUser);
router.post("/login", userController.userLogin);
router.get("/user/:userId", userController.getUserDetails);
router.put("/user/:userId", userController.updateUserData);
router.delete("/user/:userId", userController.deleteData);

module.exports = router;
