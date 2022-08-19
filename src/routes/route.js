const express = require("express");
const router = express.Router();

const publisherController = require("../controllers/newpublishercontroller");
const authorController = require("../controllers/newauthorcontroller");
const bookController=require("../controllers/newbookcontroller")

router.post("/newAuthor", authorController.createNewAuthor);
router.post("/newPublisher", publisherController.createNewPublisher);
router.post("/newBook", bookController.createNewBook);
router.get("/getAllBooks",bookController.getBooks)
router.put("/updateHardCover",bookController.hardCoverUpdate)
router.put("/updatePrice",bookController.increasedBookPrice)

module.exports = router;
