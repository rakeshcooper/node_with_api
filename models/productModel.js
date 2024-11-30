const products = require("../data/products");
const path = require('path')
const ruuid = crypto.randomUUID()
const { writeDataFile } = require('../uitlis')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
    // console.log(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
    // console.log(products);
  });
}

function create(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id)
    products[index] = {id, ...product}
    writeDataFile(path.resolve('data','products.json'), products)
    resolve(products[index]);
  });
}



module.exports = { findAll, findById, create, create };
