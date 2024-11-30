let products = require("../data/products");
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

function create(product) {
  return new Promise((resolve, reject) => {
    const newproduct = {id:ruuid,...product}
    products.push(newproduct)
    writeDataFile(path.resolve('data','products.json'), products)
    resolve(newproduct);
  });
}

function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id)
    products[index] = {id, ...product}
    writeDataFile(path.resolve('data','products.json'), products)
    resolve(products[index]);
    console.log(products[index]);
    
  });
}


function remove(id) {
  return new Promise((resolve, reject) => {
    products = products.filter((p) => p.id !== id)
    writeDataFile(path.resolve('data','products.json'), products)
    resolve();
    console.log(products);
    
  });
}



module.exports = { findAll, findById, create, update, remove };
