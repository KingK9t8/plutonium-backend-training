const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const newBookSchema = new mongoose.Schema({
	name: String,
	authorId: { type: ObjectId, ref: "New Author" },
	price: Number,
	ratings: Number,
	publisherId: { type: ObjectId, ref: "New Publisher" },
	isHardCover:{type:Boolean,default:false}
});

module.exports = mongoose.model("New Book", newBookSchema);
