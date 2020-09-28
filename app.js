// Add type: "module" in package.json to use ES6 syntex
//import { createServer } from "http";

const express = require("express");
const app = express();
const host = "localhost";
const port = "2024";

// app.headers("Content-type", "text/plain");

app.get("/", (req, res) => {
  res.setHeader("Context-type", "text/plain");
  res.send("Hello from dark side");
});
app.get("/about", (req, res) => {
  res.setHeader("Context-type", "text/plain");
  res.send("About from dark side");
});
app.get("/contactme", (req, res) => {
  res.setHeader("Context-type", "text/plain");
  res.send("Contact from dark side");
});

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});

// !TDD (Test Driven Development): We first create the test cases
// !                              and then write code to pass the test
