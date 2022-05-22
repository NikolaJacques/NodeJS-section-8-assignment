const { render } = require('express/lib/response');
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title, req.body.price, req.body.description);
  product.save();
  res.redirect('/product-added');
};

exports.getProductAdded = (req, res, next) => {
  res.render('shop/product-added', {
    pageTitle: 'Product added',
    path: ''
  })
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Products',
      path: '/products'
    });
  });
};

exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.deleteProduct = (req, res, next) => {
  Product.delete(req.body.id, () => {
    res.status(200).redirect('/admin/products')
  })
}

exports.loadEditProduct = (req, res, next) => {
  Product.fetchOne(req.body.id, product => {
    res.render('admin/edit-product', {
      pageTitle: 'Edit product',
      item: product,
      path: '' 
    })
  })
}

exports.postEditProduct = (req, res, next) => {
  Product.edit(req.body.id,{
    title: req.body.title,
    price: req.body.price,
    description: req.body.description
  }, () => {
    res.status(200).redirect('/admin/products')
  })
}