import express, { Request, Response } from "express"
import { body, validationResult } from 'express-validator';
import {encipher} from '../services/caesarCipher'
const router = express.Router()

/**
 * @api {post} /v1/caesar/encode Encode with Caesar Cipher
 * @apiName encode
 * @apiGroup Caesar
 * @apiVersion 0.0.1
 * 
 * @apiBody {string} plaintext The message to be encrypted.
 * @apiBody {integer{1-25}} shift The ammount the cipher alphabet should be shifted (ie given forward shift 3 A will become D).
 * @apiBody {string=+,-} [direction=+] The direction to shift the cipher alphabet, "+" for forward  (ie A->B) or "-" for backwards (ie A->Z).
 * @apiBody {boolean=false,true} [maintainCase=false] Whether the case of the plaintext should be maintained in the ciphertext.
 * This should generally be set to false for additional security.
 * @apiBody {boolean=false,true} [ignoreForeignChars=true] Whether foreign (non-alphabetic) characters should be ignored in the ciphertext.
 * This should generally be set to true for additional security.
 * @apiBody {boolean=false,true} [ignoreWhitespace=true] Whether whitespace should be ignored in the ciphertext.
 * This should generally be set to true for additional security.
 */

router.post('/encode', [
  body('plaintext').trim().notEmpty().isString(),
  body('shift').notEmpty().isInt({min:1,max:25}),
  body('direction').optional().trim().isString(),
  body('maintainCase').optional().isBoolean(),
  body('ignoreForeignChars').optional().isBoolean(),
  body('ignoreWhitespace').optional().isBoolean()
], (req:Request, res:Response) => {
  
  const result = validationResult(req)

  if (result.isEmpty()) {
    
    const plaintext:string = req.body.plaintext.trim()
    const shift:number = req.body.shift
    const direction:string  = (req.body.hasOwnProperty("direction") ? req.body.direction.trim() : "+")
    const maintainCase:boolean = (req.body.hasOwnProperty("maintainCase") ? (String(req.body.maintainCase).toLowerCase() === 'true') : false)
    const ignoreForeignChars:boolean = (req.body.hasOwnProperty("ignoreForeignChars") ? String(req.body.ignoreForeignChars).toLowerCase() === 'true' : true)
    const ignoreWhitespace:boolean = (req.body.hasOwnProperty("ignoreWhitespace") ? String(req.body.ignoreWhitespace).toLowerCase() === 'true' : true) 

    res.status(200)
    res.setHeader('Content-Type', 'application/json')
    res.json({cipherText : encipher(plaintext,shift,direction,maintainCase,ignoreForeignChars,ignoreWhitespace)})
    res.send()

  } else {
    res.status(400).setHeader('Content-Type', 'application/json').json({errors: result.array()}).send()
  }
})

/**
 * @api {post} /v1/caesar/decode Decode with Caesar Cipher
 * @apiName decode
 * @apiGroup Caesar
 * @apiVersion 0.0.2
 */

export { router };