const authorController = require('../controllers/author.controller');

module.exports = app => {
  app.get('/api/authors', authorController.findAllAuthors);
  app.get('/api/authors/:id', authorController.findOneAuthor)
  app.post('/api/authors', authorController.createAuthors);
  app.put('/api/edit/:id', authorController.updateAuthor);
  app.delete('/api/delete/:id', authorController.deleteAuthor);
};