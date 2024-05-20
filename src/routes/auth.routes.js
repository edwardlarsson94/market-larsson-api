// Controllers
const { authController } = require('../controllers/index.controllers')

// Libraries
const { Router } = require('express');

const router = Router();

router.post('/login', authController.login); 

module.exports = router