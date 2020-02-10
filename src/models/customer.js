const mongoose =  require('../database');

const CustomerSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
	},
	favorite: { 
		type: Schema.Types.ObjectId, 
		ref: 'Product' },
	createAt: {
		type: Date,
		default: Date.now,
	},
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer; 