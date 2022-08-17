const BookSchema = require("../Books/booksSchema");

const createBook = async function (req, res) {
	let data = req.body;
	let newEntry = await BookSchema.create(data);
	res.send({ "Author Data": newEntry });
};

const bookList = async function (req, res) {
	let bookList = await BookSchema.find().select({
		bookName: 1,
		authorName: 1,
		_id: 0,
	});
	res.send({ "Book List": bookList });
};

const getParticularBooks = async function (req, res) {
	let byQuery = await BookSchema.find(req.body);
	res.send({ data: byQuery });
	// const byYear = req.query.byYear;
	// const isAvailable = req.query.isAvailable;
	// const price = req.query.price;
	// const byBookName = req.query.byBookName;
	// const byAuthorName = req.query.byAuthorName;

	// if (typeof byYear === "string") {
	// 	let allBooks = await BookSchema.find({ year: byYear }).select({
	// 		bookName: 1,
	// 		_id: 0,
	// 	});
	// 	res.send({ data: allBooks });
	// }
	// if (isAvailable) {
	// 	let allBooks = await BookSchema.find({
	// 		stockAvailabe: isAvailable,
	// 	}).count();
	// 	res.send({ msg: allBooks });
	// }
	// if (typeof price === "string") {
	// 	let allBooks = await BookSchema.find({ "price.IndianPrice": price });
	// 	res.send(allBooks);
	// }
	// if (typeof byBookName === "string") {
	// 	let allBooks = await BookSchema.find({ bookName: byBookName });
	// 	res.send({
	// 		data: allBooks,
	// 	});
	// }
	// if (typeof byAuthorName === "string") {
	// 	let allBooks = await BookSchema.find({ authorName: byAuthorName }).select({
	// 		bookName: 1,
	// 	});
	// 	res.send(allBooks);
	// }
	// let byKeyword = await BookSchema.find({ bookName: /er$/i });
	// res.send({ books: byKeyword });
};

const getXINRBooks = async function (req, res) {
	let getXINRBooks = await BookSchema.find({
		"price.IndianPrice": { $nin: ["Rs 100", "Rs 200", "Rs 500"] },
	});
	res.send({ "INR Books": getXINRBooks });
};

const getRandomBooks = async function (req, res) {
	let getRandomBooks = await BookSchema.find({
		$or: [{ stockAvailabe: true }, { totalPages: { $gt: 500 } }],
	});
	res.send({ "Random Books": getRandomBooks });
};

module.exports = {
	createBook,
	bookList,
	getRandomBooks,
	getParticularBooks,
	getXINRBooks,
};
