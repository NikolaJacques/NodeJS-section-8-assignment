const Cart = require('../models/cart')

exports.postProduct = (req, res, next) => {
    Cart.save(req.body.id, () => {
        res.status(200).redirect('/cart')
    })
}

exports.deleteProduct = (req, res, next) => {
    Cart.delete(req.body.id, () => {
        res.status(200).redirect('/cart')
    })
}

exports.getProducts = (req, res, next) => {
    Cart.fetchAll(items => {
        res.status(200).render('shop/cart', {
            items: items,
            pageTitle: 'Cart',
            path: '/cart',
            productCSS: true
        })
    })
}