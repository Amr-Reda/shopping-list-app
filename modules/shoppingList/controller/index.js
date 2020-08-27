const ShoppingList = require('../model');
const Product = require('../../product/model');

const createShoppingList = async (req, res) => {
    try {
        const userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const isUserHasShoppingList = await ShoppingList.findOne({ userIP })
        if (isUserHasShoppingList) {
            return res
            .status(403)
            .json({ message: 'you already have shopping list please' });
        }
        const shoppingList = await ShoppingList.create({ userIP })
        return res
            .status(201)
            .json({ message: 'shopping list created successfully', shoppingList });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', data: error.message });
    }
};

const getShoppingList = async (req, res) => {
    try {
        const userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const shoppingList = await ShoppingList.findOne({ userIP })
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
        //check for shopping list exist
        const isShoppingListExist = await ShoppingList.findById(req.body.shoppingListId)
        if (!isShoppingListExist) {
            return res
            .status(404)
            .json({ message: 'shopping list not found' });
        }
        //check for product exist
        const product = await Product.findById(req.body.productId)
        if (!product) {
            return res
            .status(404)
            .json({ message: 'product not found' });
        }
        //check for product exist in the shopping list
        const isProductExistInShoppingList = await ShoppingList.findOne({
            _id: req.body.shoppingListId,
            "products.productId": req.body.productId 
        })
        if (isProductExistInShoppingList) {
            return res
            .status(403)
            .json({ message: 'product already exist in the shopping list' });
        }
        //check for quantity
        if (product.quantity - req.body.quantity < 0) {
            return res
            .status(403)
            .json({ message: 'not enough quantity available' });
        }
        //deduct product quantity
        await Product.findByIdAndUpdate(req.body.productId, {
            quantity: product.quantity - req.body.quantity
        })
        //update shopping list
        const shoppingList = await ShoppingList.findByIdAndUpdate(req.body.shoppingListId, {
            $push: { products: {
                productId: req.body.productId,
                productName: req.body.productName,
                quantity: req.body.quantity
            } }
        },{
            new: true,
            runValidators: true,
        })

        return res
            .status(200)
            .json({ message: 'shopping list updated successfully', shoppingList });
    } catch (error) {
        
    }
};

const removeProductFromShoppingList = async (req, res) => {
    try {
        //check for product exist in the shopping list
        const isProductExistInShoppingList = await ShoppingList.findOne({
            _id: req.body.shoppingListId,
            "products.productId": req.body.productId 
        })
        if (!isProductExistInShoppingList) {
            return res
            .status(403)
            .json({ message: 'product not found in shopping list' });
        }
        const shoppingList = await ShoppingList.findByIdAndUpdate(req.body.shoppingListId, {
            $pull: { products: {
                productId: req.body.productId
            } }
        },{
            new: true,
            runValidators: true,
        })
        if (!shoppingList) {
            return res
                .status(404)
                .json({ message: 'shopping list not found' });
        }
        return res
            .status(200)
            .json({ message: 'product deleted successfully from shopping list', shoppingList });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', data: error.message });
    }
};

module.exports = {
    createShoppingList,
    getShoppingList,
    addProductToShoppingList,
    removeProductFromShoppingList
};