// ------------------ IMPORTS -------------------- //
const express = require('express')
const app = express();
const prodRoute = require('./routes/prod')
const categRoute = require('./routes/categories')
const bodyParser = require('body-parser');
// const {server} = require('./bin/www')
const { errorHandler } = require('./middleware/errorHandler')
// ---------------------------------------------- //


app.use('/', prodRoute)
app.use('/', categRoute)
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use('/',errorHandler);

module.exports = {app}





