let axios = require("axios");

let getStates = async function (req, res) {
	try {
		let options = {
			method: "get",
			url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
		};
		let result = await axios(options);
		let data = result.data;
		res.status(200).send({ msg: data, status: true });
	} catch (err) {
		console.log(err);
		res.status(500).send({ msg: err.message });
	}
};

let getDistricts = async function (req, res) {
	try {
		let id = req.params.stateId;
		let options = {
			method: "get",
			url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`,
		};
		let result = await axios(options);
		let data = result.data;
		res.status(200).send({ msg: data, status: true });
	} catch (err) {
		console.log(err);
		res.status(500).send({ msg: err.message });
	}
};

let getByPin = async function (req, res) {
	try {
		let pin = req.query.pincode;
		let date = req.query.date;
		console.log(`query params are: ${pin} ${date}`);
		var options = {
			method: "get",
			url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
		};
		let result = await axios(options);
		console.log(result.data);
		res.status(200).send({ msg: result.data });
	} catch (err) {
		console.log(err);
		res.status(500).send({ msg: err });
	}
};

let getOtp = async function (req, res) {
	try {
		let body = req.body;

		console.log(`body is : ${body} `);
		var options = {
			method: "post",
			url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
			data: body,
		};

		let result = await axios(options);
		console.log(result.data);
		res.status(200).send({ msg: result.data });
	} catch (err) {
		console.log(err);
		res.status(500).send({ msg: err });
	}
};

const getVaccineByDistrict = async function (req, res) {
	try {
		let districtId = req.query["district_id"];
		let date = req.query.date;
		console.log(districtId, date);
		var options = {
			method: "get",
			url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`,
		};
		let result = await axios(options);
		console.log(result);
		const data = result.data;
		res.status(200).send({ msg: data, status: true });
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	getStates,
	getDistricts,
	getByPin,
	getOtp,
	getVaccineByDistrict,
};
