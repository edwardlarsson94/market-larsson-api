// Constants
const { db : {dbStorage} } = require('../../constants/core/core-configurations.const');
const { errorsConst } = require('../../constants/index.constants');

module.exports = {
    getAllOrdersQuery: () => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.orders)
            })
        } catch {
            throw errorsConst.orderErrors.queries.getAll
        }
    },
    createQuery: (data) => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.orders.push(data))
        })
        } catch {
            throw errorsConst.orderErrors.queries.create
        }
    }
}