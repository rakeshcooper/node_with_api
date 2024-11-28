const path = require("path");
const http = require("http");
const PORT = process.env.PORT || 5000;
const { getProducts } = require("./controllers/productControllers");
// const products = require("./data/products");

const server = http.createServer(async (req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    await getProducts(req, res);
    // res.writeHead(200, { "content-type": "application/json" });
    // res.end(JSON.stringify(products));
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "GET"
  ) {
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.write(JSON.stringify({ message: "route not found" }));
  }

  res.end();
});

server.listen(PORT, () => {
  console.log("server is running " + PORT);
});
