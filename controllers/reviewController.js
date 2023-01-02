const db = require("../models");

const Review = db.reviews;

const addReview = async function (req, res) {
	try {
		let data = {
			rating: req.body.rating,
			description: req.body.description,
		};
		const review = await Review.create(data);
		res.send(review);
	} catch (error) {
		res.status(500).send(error);
	}
};

const AllReviews = async function (req, res) {
	try {
		const reviews = await Review.findAll({});
		res.send(reviews);
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = { addReview, AllReviews };
