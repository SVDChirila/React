// ------------------ IMPORTS -------------------- //
const express = require('express')
const app = express();
const http = require('http')
const prodRoute = require('./routes/prod')
const categRoute = require('./routes/categories')
const bodyParser = require('body-parser');
// ---------------------------------------------- //


const server = http.createServer(app)


app.use('/', prodRoute)
app.use('/', categRoute)
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());

server.listen(5000)


