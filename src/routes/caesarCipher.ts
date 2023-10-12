import express, { Request, Response } from "express"
import { check, validationResult } from 'express-validator';
const router = express.Router()

/**
 * @api {post} /v1/caesar/encode Encode with Caesar Cipher
 * @apiName encode
 * @apiGroup Caesar
 * @apiVersion 0.0.1
 * 
 * @apiBody {string} plaintext The message to be encrypted.
 * @apiBody {number} shift The ammount the cipher alphabet should be shifted (ie given forward shift 3 A will become D)
 * @apiBody {string=+,-} [direction=+] The direction to shift the cipher alphabet, "+" for forward  (ie A->B) or "-" for backwards (ie A->Z).
 * @apiBody {boolean=false,true} [maintainCase=false] Whether the case of the plaintext should be maintained in the ciphertext.
 * This should generally be set to false for additional security.
 * @apiBody {boolean=false,true} [ignoreForeignChars=true] Whether foreign (non-alphabetic) characters should be ignored in the ciphertext.
 * This should generally be set to true for additional security.
 * @apiBody {boolean=false,true} [ignoreWhitespace=true] Whether whitespace should be ignored in the ciphertext.
 * This should generally be set to true for additional security.
 */

router.post('/encode', [
  check('plaintext').notEmpty(),
  check('shift').notEmpty(),
  check('direction'),
  check('ignoreForeignChars'),
  check('ignoreWhitespace')
], (req:Request, res:Response) => {
  
  const result = validationResult(req)
  if (result.isEmpty()) {
    res.send(req.body)
  }
  else {
    res.send({ errors: result.array() })
  }
})

/**
 * @api {post} /v1/caesar/decode Decode with Caesar Cipher
 * @apiName decode
 * @apiGroup Caesar
 * @apiVersion 0.0.2
 */

export { router };