const mongoose = require('mongoose');
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
	},
	{
		collection: 'shoppingList',
		timestamps: true,
		versionKey: false,
	}
);

const ShoppingList = mongoose.model('shoppingList', ShoppingListSchema);

module.exports = ShoppingList;
