// const express = require("express");
const redis = require("redis");

// const app = express();
const publisher = redis.createClient(5678);

const user = {
  id: Math.floor(Math.random() * 1000),
  name: "Obi-Wan",
};
publisher.publish("user-notify", JSON.stringify(user), () => {
  process.exit(0);
});
// app.get("/", (req, res) => {
//   return res.send("Hello from Dark side");
// });

// app.get("/publish", (req, res) => {
//   const user = {
//     id: Math.floor(Math.random() * 1000),
//     name: "Obi-Wan",
//   };
//   // let publisher = redis.createClient();
//   publisher.publish("user-notify", JSON.stringify(user), () => {
//     process.exit(0);
//   });
//   return res.send("Message Published");
// });

// app.get("/", (req, res) => {
//   const user = {
//     id: Math.floor(Math.random() * 1000),
//     name: "Obi-Wan",
//   };

//   publisher.publish("user-notify", JSON.stringify(user));
//   res.send("Publishing event using redis");
// });

// app.listen(4000, () => {
//   console.log("Port: 4000");
// });
