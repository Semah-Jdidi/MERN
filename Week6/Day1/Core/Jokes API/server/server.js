const express = require('express');
const app = express();
require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended:true}));

const JokesRoutes = require('./routes/joke.routes');
JokesRoutes(app);

app.listen(8000, () => console.log("Listening on Port 8000"));