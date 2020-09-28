// Add type: "module" in package.json to use ES6 syntex
//import { createServer } from "http";

const express = require("express");
const app = express();
const host = "localhost";
const port = "2024";

app.get("/", (res, req) => {});

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
