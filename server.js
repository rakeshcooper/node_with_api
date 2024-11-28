const path = require("path");
const http = require("http");
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-Type", "text/html");
  //   res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Hi, Welcome coder</h1>");
  res.end();
});

server.listen(PORT, () => {
  console.log("server is running " + PORT);
});
