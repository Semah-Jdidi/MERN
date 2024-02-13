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

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then(newProduct => res.status(200).json(newProduct))
    .catch(err => res.status(400).json(err))
};

module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedProduct => res.status(200).json(updatedProduct))
    .catch(err => res.status(400).json(err))
};

module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({_id: req.params.id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}