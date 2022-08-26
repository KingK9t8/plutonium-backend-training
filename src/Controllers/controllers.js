const User = require("../New Schema/userSchema");
const Product = require("../New Schema/productSchema");
const Order = require("../New Schema/orderSchema");

const userAuthentication = async (req, res, next) => {
	let isFreeAppUser = await req.headers["isfreeappuser"];
	let data=req.body
	if (isFreeAppUser === undefined) {
		return res.send("Please give isFreeAppUser status");
	} else {
		isFreeAppUser === "true"
			? (data["isFreeAppUser"] = true)
			: (data["isFreeAppUser"] = false);
			req.isFreeAppUser=data.isFreeAppUser
	}
	next();
};

const createUser = async (req, res) => {
	let data = req.body;
	data["isFreeAppUser"] = req.isFreeAppUser;
	const newUser = await User.create(data);
	res.send({ newUser: newUser });
};

const createProduct = async (req, res) => {
	let data = req.body;
	if (!data.price) return res.send("Provide Price");
	const newProduct = await Product.create(data);
	return res.send({ newProduct: newProduct });
};

const createOrder = async (req, res) => {
	let data = req.body;
	data["isFreeAppUser"] = req.isFreeAppUser;
	const productId = req.body.productId;
	const userId = req.body.userId;
	const userBalance = await User.findById(userId).select({
		balance: 1,
		_id: 0,
	});
	const productPrice = await Product.findById(productId).select({
		price: 1,
		_id: 0,
	});
	if (userBalance === null || productPrice === null) {
		return res.send("No such user or product exists");
	} else if (data["isFreeAppUser"] && userBalance && productPrice) {
		let OrderData = await Order.create(data);
		return res.send({ OrderData: OrderData });
	} else if (data["isFreeAppUser"] === false) {
		if (userBalance.balance >= productPrice.price) {
			data["amount"] = productPrice.price;
			let updatedUserBalance = await User.findByIdAndUpdate(userId, {
				$inc: { balance: -productPrice.price },
			});
			let newOrder = await Order.create(data);
			return res.send({ OrderData: newOrder });
		} else {
			return res.send("Not sufficient balance");
		}
	}
};

module.exports = {
	userAuthentication,
	createUser,
	createProduct,
	createOrder,
};
