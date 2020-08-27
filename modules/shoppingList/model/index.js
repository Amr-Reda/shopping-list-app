const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShoppingListSchema = new Schema(
	{
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
						type: String,
					},
				},
			],
		},
	},
	{
		collection: 'shoppingList',
		timestamps: true,
		versionKey: false,
	}
);

const ShoppingList = mongoose.model('shoppingList', ShoppingListSchema);

module.exports = ShoppingList;
