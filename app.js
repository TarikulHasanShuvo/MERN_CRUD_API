const express = require('express')
const cors = require("cors");
require('dotenv').config();
require('./config/db.config').connectDB();
const routeModules = require('./routes/index');

// app init
const app = express()
// response return type
app.use(express.json())
app.use(cors());

//All route define here
routeModules(app);


// set the view engine to ejs
app.set('view engine', 'ejs');


// port number
const PORT = 8000;

// http://localhost:8000
app.listen(PORT, () => {
    console.log('Server start in http://localhost:8000');
})





