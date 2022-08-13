const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
	{
		bookName: { type: String, required: true },
		authorName: { type: String, required: true },
		category: {
			type: String,
			enum: ["horror", "adventure", "romantic", "thriller"],
		},
		year: Number,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
