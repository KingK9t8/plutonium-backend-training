const express = require("express");
const router = express.Router();

const memesController=require("../controllers/memes")

router.get("/getMemes",memesController.getMemes)
router.post("/newMeme",memesController.makeMemes)

module.exports = router;
