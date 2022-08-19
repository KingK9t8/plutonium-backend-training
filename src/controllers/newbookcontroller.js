const Book = require("../New Schema/newbooks");
const Author = require("../New Schema/newauthors");
const Publisher = require("../New Schema/newpublishers");
const mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;

const createNewBook = async function (req, res) {
	let authorId = req.body.authorId;
	let publisherId = req.body.publisherId;
	let bookData = req.body;
	if (!authorId || !ObjectId.isValid(authorId))
		// (!authorId||authorId.length!==24)
		return res.send("Please provide a valid authorId");
	if (!publisherId || !ObjectId.isValid(publisherId))
		return res.send("Please provide a valid publisherId");
	let checkAuthorId = await Author.findById(authorId);
	let checkPublisherId = await Publisher.findById(publisherId);
	if (checkAuthorId) {
		if (checkPublisherId) {
			let newBook = await Book.create(bookData);
			return res.send({ newBook: newBook });
		} else {
			return res.send("Wrong publisherId");
		}
	} else {
		return res.send("Wrong AuthorId");
	}
};

const getBooks = async function (req, res) {
	const allBooks = await Book.find()
		.populate("authorId")
		.populate("publisherId");
	res.send({ allBooks: allBooks });
};

const hardCoverUpdate = async function (req, res) {
	const findPublisherId = await Publisher.find({
		name: { $in: ["Penguin", "Harper Collins"] },
	}).select({ _id: 1 });
	const updatedBooks = await Book.updateMany(
		{ publisherId: { $in: findPublisherId } },
		{ $set: { isHardCover: true } }
	);
	res.send({ data: updatedBooks });
};

const increasedBookPrice = async function (req, res) {
	const findAuthorIdByRatings = await Author.find({
		rating: { $gte: 3.5 },
	}).select({ _id: 1 });
	const updatePrice = await Book.updateMany(
		{ authorId: { $in: findAuthorIdByRatings } },
		{ $inc: { price: 10 } }
	);
	res.send({ data: updatePrice });
};

module.exports = {
	createNewBook,
	getBooks,
	hardCoverUpdate,
	increasedBookPrice,
};
