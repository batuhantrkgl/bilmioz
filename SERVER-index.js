const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("OK");
})

app.post("/", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(80, () => console.log("Hazır."));
