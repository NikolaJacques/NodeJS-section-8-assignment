const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct)
router.get('/products', productsController.getAdminProducts)
router.post('/product-delete', productsController.deleteProduct)
router.post('/edit-product', productsController.loadEditProduct)
router.post('/product-edited', productsController.postEditProduct)

module.exports = router;
