const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		quantity: {
			type: Number,
			default: 0,
			required: true,
		},
		price: {
			type: Number,
			default: 0,
			required: true,
		},
	},
	{
		collection: 'products',
		timestamps: true,
		versionKey: false,
	}
);

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
