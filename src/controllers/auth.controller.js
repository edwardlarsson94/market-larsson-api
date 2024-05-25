// Helpers
const { errorsConst } = require('../constants/index.constants');
const { responseHelpers } = require('../helpers/index.helpers')

//Libraries
const jwt = require('jsonwebtoken');

// Models - Queries
const { userQuery } = require('../models/index.queries');

module.exports = {
    login: async (req, res) => {
        const { email, password } = req.body
        try {
            const users = await userQuery.getUserNamePasswordQuery(email, password);
            if (!users) return responseHelpers.responseError(res, 404, errorsConst.userErrors.userNotExist);

            const token = jwt.sign({ id: users.id }, 'Products');

            const userFound = {
                id: users.id,
                name: users.name,
                lastName: users.lastName,
                phoneNumber: users.phoneNumber,
                address: users.address,
                role: users.role,
                token
            }
            return responseHelpers.responseSuccess(res, userFound);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    }
}