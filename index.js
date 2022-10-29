const express = require("express");

const app = express();
const places = require("./assets/places.json");
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Server is running ...");
});
app.get("/places", (req, res) => {
  res.send(places);
});

app.use("/images", express.static("./assets/images"));
app.listen(3000);
