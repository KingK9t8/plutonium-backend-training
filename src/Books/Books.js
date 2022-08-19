const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const BooksSchema = new mongoose.Schema(
	{
		name: String,
		author_id: { type: String, required: true },
		author_details: { type: ObjectId, ref: "Author" },
		price: Number,
		ratings: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("NewBook", BooksSchema);
