const express = require("express");
const router = express.Router();

const controller = require("../controllers/weather");

router.get("/getWeather", controller.weatherOfaPlace);
router.post("/sortByTemp", controller.tempSorting);

module.exports = router;
