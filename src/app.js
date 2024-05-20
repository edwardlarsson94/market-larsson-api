// Constants
const { coreConfigurationsConst } = require('./constants/index.constants');

// Libraries
require('dotenv').config();

// Models
const { ServerModel } = require('./models/index.models');

const server = new ServerModel();

server.listen();
