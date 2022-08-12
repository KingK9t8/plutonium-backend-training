const mongoose = require("mongoose");
// const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
	{
		firstName: String,
		lastName: String,
		mobile: { type: String, unique: true, required: true }, // unique is unique for every user and required is required field for every user
		emailId: String,
		gender: { type: String, enum: ["male", "female", "lgbtq"] }, // enum enumerates what values gender can take
		age: Number,
		isIndian: Boolean,
		parentsInfo: {
			motherName: String,
			fatherName: String,
			siblingName: String,
		},
		cars: [String],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema); // will create collection named users

//String,Number,Boolean,Object,Array
