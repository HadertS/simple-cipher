import express, { Request, Response } from "express"
const router = express.Router()

router.get('/', (req:Request, res:Response) => {
  res.send('https://en.wikipedia.org/wiki/Caesar_cipher')
})

router.get('/encipher', (req:Request, res:Response) => {
  console.log(req.query.plaintext);
  console.log(req.query.direction);
  console.log(req.query.shift);
  res.send(req.query)
})

export { router };