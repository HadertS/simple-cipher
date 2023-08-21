const express = require ('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.send('Caesar Cipher home page')
})
router.get('/about', (req, res) => {
  res.send('https://en.wikipedia.org/wiki/Caesar_cipher')
})

module.exports = router