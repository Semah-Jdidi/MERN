const Author = require('../models/author.model');

module.exports.findAllAuthors = (req, res) => {
  Author.find()
    .then(authors => res.json(authors))
    .catch(err => res.json(err))
};

module.exports.findOneAuthor = (req, res) => {
  Author.findOne({_id: req.params.id})
    .then(author => res.json(author))
    .catch(err => res.json(err))
};

module.exports.createAuthors = (req, res) => {
  Author.create(req.body)
    .then(newAuthor => res.status(200).json(newAuthor))
    .catch(err => res.status(400).json(err))
};

module.exports.updateAuthor = (req, res) => {
  Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
    .then(newAuthor => res.status(200).json(newAuthor))
    .catch(err => res.status(400).json(err))
};

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({_id: req.params.id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
};