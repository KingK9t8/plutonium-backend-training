const express = require("express");
const router = express.Router();

const createBook=require("../controllers/bookController")
const bookList=require("../controllers/bookController")
const getXINRBooks=require("../controllers/bookController")
const getRandomBooks=require("../controllers/bookController")
const getParticularBooks=require("../controllers/bookController")

router.post("/createBook",createBook.createBook)
router.get("/bookList",bookList.bookList)
router.post("/getXINRBooks",getXINRBooks.getXINRBooks)
router.post("/getRandomBooks",getRandomBooks.getRandomBooks)
router.post("/getParticularBooks",getParticularBooks.getParticularBooks)

module.exports = router ;
