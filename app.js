const express = require('express')
const app = express()
const router = express.Router()
const port = 3000

const logMiddleware = require('./src/middleware/log')

const caesarCipherRoute = require ('./src/routes/caesarCipher')

app.use(logMiddleware)

app.use('/caesar',caesarCipherRoute)

app.listen(port, () => {
  console.log(`Simple Cipher listening on port ${port}`)
})