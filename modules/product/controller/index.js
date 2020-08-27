const Product = require('../model');
const PAGE_LIMIT = 10;

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        return res
            .status(201)
            .json({ message: 'product created successfully', product });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', data: error.message });
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
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        if (!product) {
            return res
                .status(404)
                .json({ message: 'product not found' });
        }
        return res
            .status(200)
            .json({ message: 'product updated successfully', product });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', data: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const isDeleted = await Product.findByIdAndDelete(req.params.id)
        if (!isDeleted) {
            return res
                .status(404)
                .json({ message: 'product not found' });
        }
        return res
            .status(200)
            .json({ message: 'product deleted successfully' });
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Internal Server Error', data: error.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
};