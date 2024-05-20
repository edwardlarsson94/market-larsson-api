// Constants
const { coreConfigurationsConst } = require('../../../constants/index.constants')

// Libraries
const express = require('express');
const cors = require('cors');

class ServerModel {
    constructor() {
        this.app = express();
        this.serverHost = coreConfigurationsConst.serverHost;
        this.serverPort = coreConfigurationsConst.serverPort;
        this.paths = {
            users: '/api/users',
            auth: '/api/auth',
            product: '/api/product',
        }
        this.middleware();
        this.routes();
    }


    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.paths.users, require('../../../routes/user.routes'));
        this.app.use(this.paths.auth, require('../../../routes/auth.routes'));
        this.app.use(this.paths.product, require('../../../routes/product.routes'));
    }

    listen() {
        const port = process.env.PORT || 3000;

        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
          });
    }
}

module.exports = ServerModel;