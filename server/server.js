const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello from Backend");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});