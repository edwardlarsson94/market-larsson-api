// Helpers
const { responseHelpers } = require('../helpers/index.helpers')

//Libraries
const { v4: uuidv4 } = require('uuid');

// Models - Queries
const { userQuery } = require('../models/index.queries');

module.exports = {
    getUsers: async (_, res) => {
        try {
            const users = await userQuery.getAllUsersQuery();
            return responseHelpers.responseSuccess(res, users);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    },
    getUser: async (req, res) => {
        const { id } = req.params;
        try {
        const user = await userQuery.getUserIDQuery(id);
        return responseHelpers.responseSuccess(res, user );
        } catch (error) {
            
            return responseHelpers.responseError(res, 500, error);
        }


    },
    createUser: async (req, res) => {
        try {
            const userData = {...req.body};
            userData.id =  uuidv4();
            userData.role = "user";
            await userQuery.createNewUserQuery(userData);
            return responseHelpers.responseSuccess(res, null);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    }
}