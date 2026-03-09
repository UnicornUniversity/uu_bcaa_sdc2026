const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // podpora pro application/json
app.use(express.urlencoded({ extended: true })); // podpora pro application/x-www-form-urlencoded

const categoryController = require("./controllers/category.js");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/category", categoryController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
