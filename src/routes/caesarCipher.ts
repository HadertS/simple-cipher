/**
 * @api {get} /caesar/ Caesar Cipher
 * @apiName Encode
 * @apiGroup Caesar Cipher
 */

import express, { Request, Response } from "express"
const router = express.Router()

router.get('/encode', (req:Request, res:Response) => {
  console.log(req.query.plaintext);
  console.log(req.query.direction);
  console.log(req.query.shift);
  res.send(req.query)
})

export { router };