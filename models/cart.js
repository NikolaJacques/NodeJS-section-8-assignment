const fs = require('fs');
const path = require('path');
const { getItemsFromFile } = require('../util/getItemsFromFile');
const { deleteItem } = require('../util/delete');

const cartPath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

const productsPath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );

module.exports = class Cart {

    static save = (id, cb) => {
        getItemsFromFile(productsPath, products => {
            const product = products.find(prod => prod.id === id);
            getItemsFromFile(cartPath, cartItems => {
                cartItems.push(product);
                fs.writeFile(cartPath, JSON.stringify(cartItems), err => {
                    console.log(err);
                    cb()
                });
            });
        })
    }

    static delete = (id, cb) => {
        deleteItem(cartPath, cb, id)
    }

    static fetchAll = (cb) => {
        getItemsFromFile(cartPath, cb);
      }

    static removeAll = (cb) => {
        fs.writeFile(cartPath, JSON.stringify([]), err => {
            console.log(err)
            cb()
        })
    }
}