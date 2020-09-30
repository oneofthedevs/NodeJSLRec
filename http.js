// !Add type: "module" in package.json to use ES6 syntex
// import { createServer } from "http";

const http = require("http");
const host = "localhost";
const port = "2024";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from dark side");
});

server.listen(port, host, () => {
  console.log(`Server is running at ${host}:${port}`);
});
