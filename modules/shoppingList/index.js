const express = require('express');
const router = express.Router();
const validateRequest  = require('../../middlewares/validateRequest');

const {
    getShoppingList,
    createShoppingList,
    addProductToShoppingList,
    removeProductToShoppingList
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
    addProductToShoppingList
);

router.delete(
    '/product',
    removeProductToShoppingList
);

module.exports = router;