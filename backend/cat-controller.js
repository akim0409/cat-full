const Cat = require("./db/Cat");

const getAllCats = (req, res) => {
  Cat.findAll().then((cats) => res.status(200).json(cats));
};

const createCat = (req, res) => {
  Cat.create(req.body).then((cat) => res.status(201).json({ message: "cat created"}));
}

module.exports = {
  getAllCats,
  createCat
}