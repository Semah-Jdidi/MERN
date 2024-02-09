const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
  setup: {
    type: String, 
    required: [true, "The Setup is Required!"], 
    minlength: [10, "Setup Must Be At Least 10 Characters Long!"]
  },
  punchline: {
    type: String,
    required: [true, "The Punchline is Required!"],
    minlength: [3, "Punchline Must Be At Least 3 Characters Long!"]
  },
}, {timestamps: true});

const Joke = mongoose.model('Joke', JokesSchema);

module.exports = Joke;