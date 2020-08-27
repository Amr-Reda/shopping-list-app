const express = require('express');
const router = express.Router();
const validateRequest  = require('../../middlewares/validateRequest');

const {
    addProductToShoppingListSchema,
    removeProductFromShoppingListSchema
} = require('./joiSchemas');

const {
    getShoppingList,
    createShoppingList,
    addProductToShoppingList,
    removeProductFromShoppingList
} = require('./controller');

router.get(
    '/',
    getShoppingList
);

router.post(
    '/',
    createShoppingList
);

router.post(
    '/product',
    validateRequest(addProductToShoppingListSchema),
    addProductToShoppingList
);

router.delete(
    '/product',
    validateRequest(removeProductFromShoppingListSchema),
    removeProductFromShoppingList
);

module.exports = router;