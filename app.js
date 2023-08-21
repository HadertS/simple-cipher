const express = require('express')
const app = express()
const router = express.Router()
const port = 3000

const ceaserCipher = require ('./src/routes/ceaserCipher')

app.use('/ceaser',ceaserCipher)

app.listen(port, () => {
  console.log(`Simple Cipher listening on port ${port}`)
})