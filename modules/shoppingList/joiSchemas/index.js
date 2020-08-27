const Joi = require('@hapi/joi');

module.exports = {
	addProductToShoppingListSchema: {
		body: Joi.object().required().keys({
			productId: Joi.string().required(),
			productName: Joi.string().required(),
			quantity: Joi.number().positive().required(),
		}),
	},
	removeProductFromShoppingListSchema: {
		body: Joi.object().required().keys({
			productId: Joi.string().required(),
			shoppingListId: Joi.string().required()
		}),
	},
};
