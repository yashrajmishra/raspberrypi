const express = require("express");
const morgan = require("morgan");
const app = express();
//Logging incoming requests
app.use(morgan("tiny"));

app.post("/", function (req, res) {
  console.log(req.param("name"));
  res.json({ message: "Perfect" });
});

app.listen(2222);
