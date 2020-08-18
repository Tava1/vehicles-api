const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('uploads/', express.static('uploads'))
app.use(cors())
app.use(express.json())
app.use(routes)


module.exports = app;