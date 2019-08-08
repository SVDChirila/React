const {app} = require('../app')
const https = require('https')
const fs = require("fs")

const server = https.createServer({
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.cert')
},app)

server.listen(5000);
