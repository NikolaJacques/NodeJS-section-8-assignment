const Cart = require('../models/cart')
const { computeTotal } = require('../util/computeTotal')

exports.getCheckout = (req, res, next) => {
    Cart.fetchAll(items => {
        res.status(200).render('shop/checkout', {
            items: items,
            total: computeTotal(items),
            pageTitle: 'Checkout',
            path: '/checkout',
            productCSS: true
        })
    })
}

exports.postConfirmPurchase = (req, res, next) => {
    Cart.removeAll(() => {
        res.status(200).redirect('/purchase-confirmed')
    })
}

exports.getPurchaseConfirmed = (req, res, next) => {
    res.status(302).render('shop/purchase-confirmed', {
        pageTitle: 'Purchase confirmed',
        path: ''
    })
}