const mongoose =  require('../database');

const ProductSchema = new mongoose.Schema({
	id: {
		type: String,
		require: true,
	},
	title: {
		type: String,
		require: true,
	},
	image: {
		type: String,
		require: true,
	},
	price: {
		type: String,
		require: true,
	},
	customer: {
		type: Object,
		ref: 'Customer',
		require: true,
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;