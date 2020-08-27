// Route files
const productRoutes = require('./modules/product');
const shoppingListRoutes = require('./modules/shoppingList');

/**
 * @function
 * Registers all app routes
 *
 * @param {object} app - Express app.
 */
module.exports = (app) => {
    app.use('/product', productRoutes);
    app.use('/shoppingList', shoppingListRoutes);
};
