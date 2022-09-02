const axios = require("axios");

const weatherOfaPlace = async function (req, res) {
	try {
		const place = req.query.place;
		const options = {
			method: "get",
			url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=72fb15cd9580236ed9b4700ccb0b36cf`,
		};
		const result = await axios(options);
		const temperatureInCelsius = Math.round(result.data.main.temp - 273.15);
		res.status(200).send({ msg: `${temperatureInCelsius}C`, status: true });
	} catch (error) {
		res.send(error);
	}
};

const tempSorting = async function (req, res) {
	try {
		const arrayOfCities = [
			"Bengaluru",
			"Mumbai",
			"Delhi",
			"Kolkata",
			"Chennai",
			"London",
			"Moscow",
		];
		const sortedAccToTemp = [];
		for (city of arrayOfCities) {
			obj = { city: city };
			const options = {
				method: "get",
				url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72fb15cd9580236ed9b4700ccb0b36cf`,
			};
			const result = await axios(options);
			obj.temp = Math.round(result.data.main.temp - 273.15);
			sortedAccToTemp.push(obj);
			sortedAccToTemp.sort((a, b) => a.temp - b.temp);
		}
		res.status(200).send({ msg: sortedAccToTemp, status: true });
	} catch (error) {
		res.send(error);
	}
};

module.exports = { weatherOfaPlace, tempSorting };
