const express = require("express");
const app = express();
const cors = require('cors')
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }), cors());
require("./routes/product.routes")(app);
    
app.listen(8000, () => console.log("Listening on port 8000"));