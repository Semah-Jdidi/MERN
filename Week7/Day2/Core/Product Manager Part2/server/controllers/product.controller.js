const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) =>{
  Product.find()
    .then(allProducts => res.json(allProducts))
    .catch(err => res.json(err))
};

module.exports.findOneProduct = (req, res) => {
  Product.findOne({_id: req.params.id})
    .then(product => res.json(product))
    .catch(err => res.json(err))
};

module.exports.createUser = (req, res) => {
  Product.create(req.body)
    .then(newProduct => res.status(200).json(newProduct))
    .catch(err => res.status(400).json(err))
};