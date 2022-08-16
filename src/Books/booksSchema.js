const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
	{
		bookName: { type: String, required: true },
		authorName: { type: String },
		tags: [String],
		totalPages: Number,
		year: { type: Number, default: 2021 },
		price: { IndianPrice: String, EuropeanPrice: String },
		stockAvailabe: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
