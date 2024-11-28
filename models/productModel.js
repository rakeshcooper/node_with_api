const products = require("../data/products");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
    // console.log(products);
  });
}

module.exports = { findAll };
