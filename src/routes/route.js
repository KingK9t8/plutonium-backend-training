const express = require("express");
const router = express.Router();

const BookController=require("../controllers/bookController")

router.post("/createBook",BookController.createBook)
router.get("/bookList",BookController.bookList)
router.post("/getXINRBooks",BookController.getXINRBooks)
router.post("/getRandomBooks",BookController.getRandomBooks)
router.post("/getParticularBooks",BookController.getParticularBooks)

module.exports = router ;
