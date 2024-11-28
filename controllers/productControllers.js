const Product = require("../models/productModel.js");

async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    await res.writeHead(200, { "content-type": "application/json" });
    await res.end(JSON.stringify(products));
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getProducts };
