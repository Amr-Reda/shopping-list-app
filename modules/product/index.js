const express = require('express');
const router = express.Router();
const validateRequest  = require('../../middlewares/validateRequest');

const {
    createProductShema,
    updateProductSchema
} = require('./joiSchemas');

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
    validateRequest(createProductShema),
    createProduct
);

router.put(
    '/:id',
    validateRequest(updateProductSchema),
    updateProduct
);

router.delete(
    '/:id',
    deleteProduct
);

module.exports = router;