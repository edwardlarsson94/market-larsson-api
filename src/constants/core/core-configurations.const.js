
// Libraries
const dotenv = require('dotenv');
const path = require('path');
const appConst = require('./app.const');
const { DbProject } = require('../../db/db.model');


const nodeEnv = 'development';

const serverHost = 'localhost';
const serverPort = process.env.SERVER_PORT || 3000;

const privateKey = "ApiProducts";


const db = DbProject.getInstance();
db.connect()

module.exports = {
    nodeEnv,
    serverHost,
    serverPort,
    privateKey,
    db
}