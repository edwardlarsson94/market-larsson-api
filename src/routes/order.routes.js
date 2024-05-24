// Controllers
const { orderController } = require('../controllers/index.controllers')

// Libraries
const { Router } = require('express');

const router = Router();

router.post('/', orderController.createOrder); 

router.get('/', orderController.getOrders);

module.exports = router