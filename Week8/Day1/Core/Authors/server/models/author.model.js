const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [3, 'Name Must Be At Least 3 Characters Long!'],
    required: [true, 'Name is Required!']
  }
}, {timestamps: true});

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;