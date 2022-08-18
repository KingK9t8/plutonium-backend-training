const Authors = require("../Books/Authors");
const newBooks = require("../Books/Books");

const createAuthor = async function (req, res) {
	let data = req.body;
	let newAuthors = await Authors.create(data);
	res.send({ data: newAuthors });
};

const createBook = async function (req, res) {
	let data = req.body;
	let newBook = await newBooks.create(data);
	res.send({ data: newBook });
};

const bookWrittenByAuthor = async function (req, res) {
	let author_name = req.body;
	let get_author_id = await Authors.find(author_name).select({
		author_id: 1,
		_id: 0,
	});
	let author_id = get_author_id[0];
	let booksWritten = await newBooks.find(author_id);
	res.send({ data: booksWritten });
};

const priceUpdation = async function (req, res) {
	let findAndUpdate = await newBooks
		.findOneAndUpdate({ name: "Harry Potter" }, { price: 200 }, { new: true })
		.select({ author_id: 1, _id: 0 });
	let findAuthor = await Authors.find(findAndUpdate).select({
		author_name: 1,
		_id: 0,
	});
	res.send({ data: findAuthor });
};

const filterAuthorByPrice = async function (req, res) {
	let author_id = await newBooks
		.find({ price: { $gte: 50, $lte: 100 } })
		.select({ author_id: 1, _id: 0 });
	let authors = await Authors.find();
	let result = [];
	let newArr = author_id.map((x) => {
		for (element of authors) {
			if (element.author_id == x.author_id) {
				result.push(element.author_name);
			}
		}
	});
	res.send({ data: result });
};

module.exports = {
	createAuthor,
	createBook,
	bookWrittenByAuthor,
	priceUpdation,
	filterAuthorByPrice,
};
