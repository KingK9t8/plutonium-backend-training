const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");

router.post("/createNewAuthor", UserController.createNewAuthor);
router.get("/getAuthors", UserController.getAuthorData);

module.exports = router;
