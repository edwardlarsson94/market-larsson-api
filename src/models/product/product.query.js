// Constants
const { db : {dbStorage} } = require('../../constants/core/core-configurations.const');
const { errorsConst } = require('../../constants/index.constants');

module.exports = {
    getProductIDQuery: (id) => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.product.find(product => product.id === id))
        })
        } catch {
            throw errorsConst.productErrors.queries.getById
        }
    },
    getAllProductsQuery: () => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.product)
            })
        } catch {
            throw errorsConst.productErrors.queries.getAll
        }
    },
    createQuery: (data) => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.product.push(data))
        })
        } catch {
            throw errorsConst.productErrors.queries.create
        }
    },
    updateQuery: (id, data) => {
        try {
            return new Promise((resolve, reject) => {
                function updateElementById(id, dataToUpdate, tableData) {
                    const index = tableData.findIndex(element => element.id === id);

                    if (index !== -1) {
                        tableData[index] = Object.assign({}, tableData[index], dataToUpdate);
                        resolve(null);
                    } else {
                        reject(errorsConst.productErrors.productNotExist);
                    }
                }

                updateElementById(id, data, dbStorage.product);
        })
        } catch {
            throw errorsConst.productErrors.queries.update
        }
    },
    deleteQuery: (id) => {
        try {
            return new Promise((resolve, reject) => {
                const index = dbStorage.product.findIndex(product => product.id === id);

                if (index !== -1) {
                    dbStorage.product.splice(index, 1);
                    resolve(null);
                } else {
                    reject(errorsConst.productErrors.productNotExist);
                }
            });
        } catch {
            throw errorsConst.productErrors.queries.delete;
        }
    }
}