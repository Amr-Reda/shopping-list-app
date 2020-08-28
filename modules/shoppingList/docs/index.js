module.exports = {
	'/shoppingList': {
		get: {
			tags: ['shoppingList'],
			summary: 'get your shopping list',
			responses: {
				200: {
					description: 'OK',
				},
				500: {
					description: 'Server Error',
				},
			},
			parameters: [],
		},
		post: {
			tags: ['shoppingList'],
			summary: 'create shopping list',
			responses: {
				200: {
					description: 'OK',
				},
				500: {
					description: 'Server Error',
				},
				400: {
					description: 'Bad Request',
				},
			},
			parameters: [],
		},
	},
	'/shoppingList/product': {
		post: {
			tags: ['shoppingList'],
			summary: 'add product to shopping list',
			responses: {
				200: {
					description: 'OK',
				},
				500: {
					description: 'Server Error',
				},
			},
			parameters: [
				{
					in: 'body',
					name: 'body',
					required: true,
					schema: {
						type: 'object',
						properties: {
							shoppingListId: {
								type: 'string',
								example: '5f483df08ce71724dc3458d6',
							},
							productId: {
								type: 'string',
								example: '5f47ca9d2c354d3d55a1687e',
							},
							productName: {
								type: 'string',
								example: 'milk',
							},
							quantity: {
								type: 'number',
								example: 5,
							}
						},
					},
				},
			],
		},
		delete: {
			tags: ['shoppingList'],
			summary: 'delete product from shopping list',
			responses: {
				200: {
					description: 'OK',
				},
				500: {
					description: 'Server Error',
				},
				400: {
					description: 'Bad Request',
				},
			},
			parameters: [
				{
					in: 'body',
					name: 'body',
					required: true,
					schema: {
						type: 'object',
						properties: {
							shoppingListId: {
								type: 'string',
								example: '5f483df08ce71724dc3458d6',
							},
							productId: {
								type: 'string',
								example: '5f47ca9d2c354d3d55a1687e',
							},
						},
					},
				},
			],
		},
	},
};
