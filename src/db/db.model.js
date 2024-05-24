const { product } = require("./product.db");
const { users } = require("./user.db");
const { orders } = require("./order.db");

class DbProject {
    constructor() {
        this.dbStorage = null;
    }

    static getInstance() {
        if (!DbProject.instance) {
            DbProject.instance = new DbProject();
        }
        return DbProject.instance;
    }

    connect() {
        this.dbStorage = {
            users: [...users],
            product: [...product],
            orders: [...orders]
    }
    }
}

module.exports = { DbProject };