const Product = require("../models/productModel.js");

// desc GET all product
// to get  GET /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.error(error);
  }
}

// desc GET single product
// to get  GET /api/products:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "product not found" }));
    } else {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.error(error);
  }
}

async function createProduct(req, res) {
  try {
    const product = {
      title:'Test File',
      name:'Test name',
      desc:'Test desc'
    }
    const newProduct = await Product.create(product);

    res.writeHead(201, { "content-type": "application/json" });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getProducts, getProduct, createProduct };
