// const express = require("express");
const redis = require("redis");

// const app = express();
const subscriber = redis.createClient(process.env.REDIS_URL);

subscriber.on("message", (channel, message) => {
  console.log(`Message: ${message}, Channel: ${channel}`);
});

subscriber.subscribe("user-notify");

// app.get("/", (req, res) => {
//   res.send("Subs one");
// });

// app.listen(3000, () => {
//   console.log("Port 3000");
// });
