import express, { Request, Response } from "express"
const router = express.Router()

router.get('/', (req:Request, res:Response) => {
  res.send('https://en.wikipedia.org/wiki/Caesar_cipher')
})

export { router };