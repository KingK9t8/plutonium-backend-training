const mongoose = require("mongoose");

const newAuthorSchema = new mongoose.Schema({
	authorName: String,
	age: Number,
	address: String,
	rating: Number,
});

module.exports = mongoose.model("New Author", newAuthorSchema);

