// Helpers
const { responseHelpers } = require('../helpers/index.helpers');

// Libraries
const { v4: uuidv4 } = require('uuid');
const moment = require('moment-timezone');

// Models - Queries
const { orderQuery } = require('../models/index.queries');

module.exports = {
    getOrders: async (req, res) => {
        try {
            const orders = await orderQuery.getAllOrdersQuery();
            const sortedOrders = orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            return responseHelpers.responseSuccess(res, sortedOrders);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    createOrder: async (req, res) => {
        try {
            const orderData = req.body;
            orderData.id = uuidv4();
            orderData.createdAt = moment().tz('America/Bogota').format();
            await orderQuery.createQuery(orderData);
            return responseHelpers.responseSuccess(res, { id: orderData.id });
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    }
};