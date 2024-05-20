// Controllers
const { userController } = require('../controllers/index.controllers')

// Libraries
const { Router } = require('express');

const router = Router();

router.post('/', userController.createUser); 

router.get('/', userController.getUsers);

router.get('/:id', userController.getUser);

module.exports = router