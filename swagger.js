const product = require('./modules/product/docs');
const shoppingList = require('./modules/shoppingList/docs');

const swaggerDocs = {
    swagger: '2.0',
    info: {
      version: '0.0.0',
      title: 'Shopping List APP',
      description: 'API for the Shopping List APP'
    },
    tags: [],
    // schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
  paths: {
    ...product,
    ...shoppingList
  },
};

module.exports = swaggerDocs;
