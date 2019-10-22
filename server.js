const path = require('path')
const express = require('express')
const http = require('http')
const app = express()

app.use('/', express.static(path.join(__dirname, 'dist')))

http.createServer(app).listen(80)