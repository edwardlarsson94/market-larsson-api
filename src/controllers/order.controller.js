// Helpers
const { responseHelpers } = require('../helpers/index.helpers')

//Libraries
const { v4: uuidv4 } = require('uuid');

// Models - Queries
const { orderQuery } = require('../models/index.queries');


module.exports = {
    getOrders: async (req, res) => {
        try {
            const orders = await orderQuery.getAllOrdersQuery();
            return responseHelpers.responseSuccess(res, orders);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    createOrder: async (req, res) => {
        try {
            const orderData = req.body;
            orderData.id = uuidv4();
            await orderQuery.createQuery(orderData);
            return responseHelpers.responseSuccess(res, { id: orderData.id });
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    }
}