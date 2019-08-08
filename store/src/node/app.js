// ------------------ IMPORTS -------------------- //
const express = require('express')
const app = express();
const cors = require('cors')
const prodRoute = require('./routes/prod')
const categRoute = require('./routes/categories')
const bodyParser = require('body-parser');
// const {server} = require('./bin/www')
const { errorHandler } = require('./middleware/errorHandler')
// ---------------------------------------------- //

const whitelist = ["http://localhost:3000"];
const corsOptions = {
 origin: (origin, callback) => {
   if (whitelist.indexOf(origin) !== -1) {
    callback(new Error("Not allowed by CORS"));
     
   } else {
    callback(null, true);
   }
 }
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use('/', prodRoute)
app.use('/', categRoute)
app.use(express.urlencoded({extended: false}))

app.use('/',errorHandler);

module.exports = {app}





