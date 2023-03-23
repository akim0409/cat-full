const Cat = require("./db/Cat");

const getAllCats = (req, res) => {
  Cat.findAll().then((cats) => res.status(200).json(cats));
};

const createCat = (req, res) => {
  Cat.create(req.body).then((cat) => res.status(201).json({ message: "cat created"}));
};

const getCatById = (req, res) => {
  Cat.findOne({
    where: { id: req.params.catId }
  }).then((cat) => {
    if (cat === null) {
      res.status(404).json({ message: "404 Cat not found"});
    } else {
      res.status(200).json(cat);
    }
  });
}

const updateCatById = (req, res) => {
  Cat.update( req.body, {
    where: { id: req.params.catId }
  }).then((cat) => res.status(200).json(cat));
};

const deleteCatById = (req, res) => {
  Cat.destroy({
    where: {id: req.params.catId}
  }).then((catId) => {
    if (catId === 0) {
      res.status(404).json({ message: 'cat not found'});
    } else {
      res.status(200).json({ message: 'cat deleted'});
    }
  })
}

module.exports = {
  getAllCats,
  createCat,
  getCatById,
  updateCatById,
  deleteCatById
}