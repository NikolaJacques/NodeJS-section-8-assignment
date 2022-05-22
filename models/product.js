const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid')
const { getItemsFromFile } = require('../util/getItemsFromFile');
const { deleteItem } = require('../util/delete')

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

module.exports = class Product {
  constructor(title, price, description) {
    this.id = uuidv4();
    this.title = title;
    this.price = price;
    this.description = description
  }

  save() {
    getItemsFromFile(p, products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getItemsFromFile(p, cb);
  }

  static fetchOne(id, cb) {
    getItemsFromFile(p, products => {
      const product = products.find(prod => prod.id === id);
      cb(product)
    })
  }

  static delete = (id, cb) => {
    deleteItem(p, cb, id)
  }

  static edit = (id, changes, cb) => {
    getItemsFromFile(p, (products) => {
      const product = products.find(prod => prod.id === id);
      const updatedProduct = {...product, ...changes}
      const productIndex = products.findIndex(prod => prod.id === id)
      products.splice(productIndex, 1, updatedProduct)
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err)
        cb()
      })
    })
  }

};
