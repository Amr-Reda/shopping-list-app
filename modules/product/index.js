const express = require('express');
const router = express.Router();

const {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
} = require('./controller');

router.get(
    '/',
    getAllProducts
);

router.post(
    '/',
    createProduct
);

router.put(
    '/',
    updateProduct
);

router.delete(
    '/',
    deleteProduct
);

module.exports = router;