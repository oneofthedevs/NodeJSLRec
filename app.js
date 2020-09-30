// Add type: "module" in package.json to use ES6 syntex
//import { createServer } from "http";

//* All imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const SSE = require("express-sse");
//* Port and Host
const host = "localhost";
const port = "2024";

//* All app.use
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//* New global objects
const sse = new SSE();

//* API endpoints
app.get("/api-call-update", sse.init);

app.get("/api-one", (req, res) => {
  let content = { message: "API One Call at: " + new Date().toUTCString() };
  sse.send(content);
  res.status(200).send({
    "content-Message": "text/event-stream triggred from api one call",
  });
});

app.get("/api-two", (req, res) => {
  let content = { message: "API two Call at: " + new Date().toUTCString() };
  sse.send(content);
  res.status(200).send({
    "content-Message": "text/event-stream triggred from api two call",
  });
});
app.put("/api-put", (req, res) => {
  let content = {
    message: "API put Call at: " + new Date().toUTCString(),
    content: req.body,
  };
  sse.send(content);
  res.status(200).send({
    "content-Message": "text/event-stream triggred from api put call",
  });
});
app.post("/api-post", (req, res) => {
  let content = {
    message: "API post Call at: " + new Date().toUTCString(),
    content: req.body,
  };
  sse.send(content);
  res.status(200).send({
    "content-Message": "text/event-stream triggred from api post call",
  });
});

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.send("Hello from dark side");
});

app.get("/about", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.send("About from dark side");
});

app.get("/contactme", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.send("Contact from dark side");
});

//* Server Listen
app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});

//! NOTES
//* TDD (Test Driven Development): We first create the test cases
//*                                and then write code to pass the test
