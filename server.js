const path = require("path");
const http = require("http");
const PORT = process.env.PORT || 5000;
const products = require("./data/products");

const server = http.createServer((req, res) => {
  //   res.statusCode = 200;
  //   res.setHeader("content-Type", "text/html");

  if (req.url === "/api/products" && req.method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(products));
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.write(JSON.stringify({ message: "route not found" }));
  }

  res.end();
});

server.listen(PORT, () => {
  console.log("server is running " + PORT);
});
