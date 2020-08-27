const mongoose = require('mongoose');
const Product = require('../../product/model');

const { Schema } = mongoose;

const ShoppingListSchema = new Schema(
	{
		userIP: { type: String, unique: true, required: true },
		products: {
			type: [
				{
					productId: {
						type: String,
					},
					productName: {
						type: String,
					},
					quantity: {
						type: Number,
					},
					_id: false,
				},
			],
		},
		totalPrice: {
			type: Number,
			default: 0
		}
	},
	{
		collection: 'shoppingList',
		timestamps: true,
		versionKey: false,
	}
);

const calculateTotalPriceAndUpdateProducts = async function () {
	let totalPrice = 0
	let updatedProducts = []
	for (let index = 0; index < this.products.length; index++) {
		const product = this.products[index];
		let productInfo = await Product.findById(product.productId)
		if (productInfo) {
			totalPrice += productInfo.price * product.quantity
			updatedProducts.push(product)
		}
	}
	this.totalPrice = totalPrice
	this.products = updatedProducts
	await this.save()
	return this
}

ShoppingListSchema.method('calculateTotalPriceAndUpdateProducts', calculateTotalPriceAndUpdateProducts);

const ShoppingList = mongoose.model('shoppingList', ShoppingListSchema);

module.exports = ShoppingList;
