const db = require("../models");

const Product = db.products;

const addProduct = async function (req, res) {
	try {
		let info = {
			title: req.body.title,
			price: req.body.price,
			description: req.body.description,
			published: req.body.published || false,
		};
		const product = await Product.create(info);
		res.status(201).send(product);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllProducts = async function (req, res) {
	try {
		let products = await Product.findAll({});
		res.send(products);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getOneProduct = async function (req, res) {
	try {
		let id = req.params.id;
		let products = await Product.findOne({ where: { id } });
		res.send(products);
	} catch (error) {
		res.status(500).send(error);
	}
};

const updateProduct = async function (req, res) {
	try {
		let id = req.params.id;
		const product = await Product.update(req.body, { where: { id } });
	} catch (error) {
		res.status(500).send(error);
	}
};

const deleteProduct = async function (req, res) {
	try {
		let id = req.params.id;
		await Product.destroy({ where: { id } });
		res.send("success");
	} catch (error) {
		res.status(500).send(error);
	}
};

const getPublishedProduct = async function (req, res) {
	try {
		const products = await Product.findAll({ where: { published: true } });
		res.send(products);
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	addProduct,
	getAllProducts,
	getOneProduct,
	updateProduct,
	deleteProduct,
	getPublishedProduct,
};
