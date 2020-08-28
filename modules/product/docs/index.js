module.exports = {
	'/product': {
		get: {
			tags: ['product'],
			summary: 'get all products',
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
			tags: ['product'],
			summary: 'create product',
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
							name: {
								type: 'string',
								example: 'milk',
							},
							quantity: {
								type: 'number',
								example: 5,
							},
							price: {
								type: 'number',
								example: 10,
							},
						},
					},
				},
			],
		},
	},
	'/product/{id}': {
		put: {
			tags: ['product'],
			summary: 'update product',
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
					in: 'path',
					name: 'id',
					required: true,
					type: 'string',
					schema: {
						example: '',
						description: '',
					},
				},
				{
					in: 'body',
					name: 'body',
					required: true,
					schema: {
						type: 'object',
						properties: {
							name: {
								type: 'string',
								example: 'milk',
							},
							quantity: {
								type: 'number',
								example: 5,
							},
							price: {
								type: 'number',
								example: 10,
							},
						},
					},
				},
			],
		},
		delete: {
			tags: ['product'],
			summary: 'delete product',
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
					in: 'path',
					name: 'id',
					required: true,
					type: 'string',
					schema: {
						example: '',
						description: '',
					},
				},
			],
		},
	},
};
