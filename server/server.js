const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/message", (req, res) => {
  console.log("Frontend requested /message");

  res.json({
    message: "Hello from Backend",
  });
});

app.listen(5000, () => {
  console.log("MONICA SERVER IS RUNNING");
});

setInterval(() => {
  console.log("Still Alive");
}, 5000);