const Joi = require('@hapi/joi');

module.exports = {
	createProductShema: {
		body: Joi.object().required().keys({
			name: Joi.string().required(),
			quantity: Joi.number().positive().required(),
			price: Joi.number().positive().required(),
		}),
	},
	updateProductSchema: {
		body: Joi.object().required().keys({
			name: Joi.string(),
			quantity: Joi.number().positive(),
			price: Joi.number().positive(),
		}),
	},
};
