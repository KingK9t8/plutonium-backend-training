const axios = require("axios");

const getMemes = async function (req, res) {
	try {
		const options = {
			method: "get",
			url: "https://api.imgflip.com/get_memes",
		};
		const result = await axios(options);
		res.status(200).send({ msg: result.data, status: true });
	} catch (error) {
		res.send(error);
	}
};

const makeMemes = async function (req, res) {
	try {
		const memeId = req.query["template_id"];
		const text0 = req.query["text0"];
		const text1 = req.query["text1"];
		const username = req.query["username"];
		const password = req.query["password"];

		const options = {
			method: "post",
			url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
		};
		const result = await axios(options);
		res.status(200).send({ msg: result.data, status: true });
	} catch (error) {
		res.send(error);
	}
};
module.exports = { getMemes, makeMemes };
