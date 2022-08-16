const BookSchema = require("../Books/booksSchema");

const createNewAuthor = async function (req, res) {
	let data = req.body;
	let savedData = await BookSchema.create(data);
	res.send({ "Author Data": savedData });
};

const getAuthorData = async function (req, res) {
	let allAuthors = await BookSchema.find();
	res.send({ "All authors": allAuthors });
};

module.exports = { createNewAuthor, getAuthorData } ;
 