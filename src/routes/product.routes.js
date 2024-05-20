// Controllers
const { productController } = require('../controllers/index.controllers')

// Libraries
const { Router } = require('express');

const router = Router();

router.post('/', productController.createProduct); 

router.get('/', productController.getProducts);

router.get('/:id', productController.getProduct);

router.patch('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router