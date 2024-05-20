// Helpers
const { responseHelpers } = require('../helpers/index.helpers')

//Libraries
const { v4: uuidv4 } = require('uuid');

// Models - Queries
const { productQuery } = require('../models/index.queries');


module.exports = {
    getProducts: async (req, res) => {
        try {
            const products = await productQuery.getAllProductsQuery();
            return responseHelpers.responseSuccess(res, products);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    getProduct: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await productQuery.getProductIDQuery(id);
            return responseHelpers.responseSuccess(res, product );
        } catch (error) {
            
            return responseHelpers.responseError(res, 500, error);
        }
    },
    createProduct: async (req, res) => {
        try {
            const productData = req.body;
            productData.id = uuidv4();
            productData.image = "/product-default.jpg";
            await productQuery.createQuery(productData);
            return responseHelpers.responseSuccess(res, { id: productData.id });
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const key = id.toString()
            await productQuery.updateQuery(key, {...req.body});
            return responseHelpers.responseSuccess(res, null);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    deleteProduct: async (req, res) => {
        const { id } = req.params;
        try {
            await productQuery.deleteQuery(id);
            return responseHelpers.responseSuccess(res, null);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    }
}