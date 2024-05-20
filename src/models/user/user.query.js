// Constants
const { db : {dbStorage} } = require('../../constants/core/core-configurations.const');
const { errorsConst } = require('../../constants/index.constants');

module.exports = {
    getUserIDQuery: (id) => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.users.find(user => user.id === id))
        })
        } catch {
            throw errorsConst.userErrors.queries.getById
        }
    },
    getAllUsersQuery: () => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.users)
            })
        } catch {
            throw errorsConst.userErrors.queries.getAll
        }
    },
    createNewUserQuery: (data) => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.users.push(data))
        })
        } catch {
            throw errorsConst.userErrors.queries.create
        }
    },
    getUserNamePasswordQuery: (nickName, password) => {
        try {
            return new Promise((resolve, _) => {
                resolve(dbStorage.users.find(user => user.nickName.toLowerCase() === nickName.toLowerCase() && user.password === password))
        })
        } catch {
            throw errorsConst.userErrors.queries.create
        }
    }
}