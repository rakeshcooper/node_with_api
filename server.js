const path = require("path");
const http = require("http");
const PORT = process.env.PORT || 5000;
const { getProducts, getProduct, createProduct } = require("./controllers/productControllers");
// const products = require("./data/products");

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === "/api/products" && req.method === "GET") {
      await getProducts(req, res);
    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === "GET") {
      const id = req.url.split("/")[3];
      await getProduct(req, res, id);
    } else if(req.url === "/api/products" && req.method === "POST"){
      await createProduct(req, res)
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.write(JSON.stringify({ message: "route not found" }));
    }

    res.end();
  } catch (error) {
    console.error(error);
  }
});

server.listen(PORT, () => {
  console.log("server is running " + PORT);
});
