const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const catController = require("./cat-controller");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/cats", catController.getAllCats);
app.post("/cats", catController.createCat);
app.get("/cats/:catId", catController.getCatById);
app.put("/cats/:catId", catController.updateCatById);
app.delete("/cats/:catId", catController.deleteCatById);

app.listen(port, () => {
  console.log(`Cat app listening on port ${port}`);
});