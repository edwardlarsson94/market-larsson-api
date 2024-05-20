// Helpers
const { errorsConst } = require('../constants/index.constants');
const { responseHelpers } = require('../helpers/index.helpers')

//Libraries
const jwt = require('jsonwebtoken');

// Models - Queries
const { userQuery } = require('../models/index.queries');

module.exports = {
    login: async (req, res) => {
        const { nickName, password } = req.body
        try {
            const user = await userQuery.getUserNamePasswordQuery(nickName, password);
            if (!user) return responseHelpers.responseError(res, 404, errorsConst.userErrors.userNotExist);

            const token = jwt.sign({ id: user.id }, 'Products');

            const userFound = {
                id: user.id,
                name: user.name,
                lastName: user.lastName,
                phoneNumber: user.phoneNumber,
                address: user.address,
                role: user.role,
                token
            }
            return responseHelpers.responseSuccess(res, userFound);
        } catch (error) {
            return responseHelpers.responseError(res, 500, error);
        }
    }
}