const ShoppingList = require('../model');

const createShoppingList = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

const getShoppingList = async (req, res) => {
    try {
        const shoppingList = await ShoppingList.findOne({ userIP: req.connection.remoteAddress })
        if (!shoppingList) {
            return res
            .status(404)
            .json({ message: 'you don\'t have shopping list please create one' });
        }
        return res
            .status(200)
            .json({ message: 'shopping list loaded successfully', shoppingList });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', data: error.message });
    }
};

const addProductToShoppingList = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

const removeProductFromShoppingList = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

module.exports = {
    createShoppingList,
    getShoppingList,
    addProductToShoppingList,
    removeProductFromShoppingList
};