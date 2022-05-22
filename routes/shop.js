const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');
const cartController = require('../controllers/cart')
const checkoutController = require('../controllers/checkout')
const homeController = require('../controllers/home')

const router = express.Router();

router.get('/', homeController.getHomePage)
router.get('/products', productsController.getProducts);
router.get('/product-added', productsController.getProductAdded)
router.post('/cart', cartController.postProduct)
router.get('/cart', cartController.getProducts)
router.post('/cart/delete', cartController.deleteProduct)
router.get('/checkout', checkoutController.getCheckout)
router.post('/confirm-purchase', checkoutController.postConfirmPurchase)
router.get('/purchase-confirmed', checkoutController.getPurchaseConfirmed)

module.exports = router;
