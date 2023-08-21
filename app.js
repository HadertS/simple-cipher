const express = require('express')
const app = express()

const logMiddleware = require('./src/middleware/log')

const caesarCipherRoute = require ('./src/routes/caesarCipher')

app.use(logMiddleware)

app.use('/caesar',caesarCipherRoute)

module.exports = app;