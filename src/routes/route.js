const express = require("express");
const router = express.Router();

const controller=require("../controllers/AuthorAndBookController")

router.post("/createNewAuthor",controller.createAuthor)
router.post("/createNewBook",controller.createBook)
router.post("/getAuthorsBooks",controller.bookWrittenByAuthor)
router.post("/priceUpdate",controller.priceUpdation)
router.post("/filterByPrice",controller.filterAuthorByPrice)

module.exports = router ;