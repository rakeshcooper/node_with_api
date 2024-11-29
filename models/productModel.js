const products = require("../data/products");
const ruuid = crypto.randomUUID()
const {writeDataFile} = require('../uitlis')

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
    // products.push(newproduct)
    products.push(newproduct)
    writeDataFile('data/products.json', products)
    resolve(newproduct);
    console.log(products);
  });
}



module.exports = { findAll, findById, create };
