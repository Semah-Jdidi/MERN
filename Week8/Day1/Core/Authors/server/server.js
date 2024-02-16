const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json(), express.urlencoded({ extended: true }), cors());
require('./routes/author.routes')(app);

require('dotenv').config();
require('./config/mongoose.config');

const port = process.env.PORT

app.listen(port, () => console.log(`Listening on port ${port}`));