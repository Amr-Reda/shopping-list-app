const Product = require('../model');
const PAGE_LIMIT = 10;

const createProduct = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

const getAllProducts = async (req, res) => {
    try {
        const page = req.query.page ? req.query.page : 1;
        delete req.query.page;
        const options = {
            skip: ((PAGE_LIMIT * page) - PAGE_LIMIT),
            limit: PAGE_LIMIT,
        };
        const products = await Product.find().skip(options.skip).limit(options.limit)
        const totalCount = await Product.countDocuments()
        return res
            .status(200)
            .json({ message: 'products loaded successfully', totalCount, products });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', data: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

const deleteProduct = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
};