const Product = require("../models/productModel.js");

const  { getPostData } = require('../uitlis')

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

// desc POST to create product
// to POST /api/products:id

async function createProduct(req, res) {

  try {

   const body = await getPostData(req)
   const { names, description, price } = JSON.parse(body)

    const product = {
      names,
      description,
      price
    }

 const newProduct = await Product.create(product);


   res.writeHead(201, { "content-type": "application/json" });
    return res.end(JSON.stringify(newProduct));
    
  } catch (error) {
    console.error(error);
}



  // try {
  //   const product = {
  //     name : 'Cooper',
  //     description : 'Test',
  //     price: 1600
  //   }
  //   const newProduct = await Product.create(product);


  //   res.writeHead(201, { "content-type": "application/json" });
  //   return res.end(JSON.stringify(newProduct));

    
    
  // } catch (error) {
  //   console.error(error);
  // } 
}

// desc PUT to update product
// to PUT /api/products:id

async function updateProduct(req, res, id) {

      try {
        const product = await Product.findById(id);
        if (!product) {
          res.writeHead(404, { "content-type": "application/json" });
          res.end(JSON.stringify({ message: "product not found" }));
        } else {
            const body = await getPostData(req)
            const { names, description, price } = JSON.parse(body)

            const  productData = {
              names: names || product.names,
              description: description || product.description,
              price: price || product.price
            }

            

            const updProduct = await Product.update(id, productData);
            res.writeHead(200, { "content-type": "application/json" });
            return res.end(JSON.stringify(updProduct));   
        }

      
        
      } catch (error) {
        console.error(error);
    }
  }
  
  
  // desc DELETE product
// to delete  DELETE /api/products:id
async function deleteProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "product not found" }));
    } else {
      await Product.remove(id); 
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: `product ${id} removed` }));
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
