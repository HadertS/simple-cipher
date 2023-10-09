import express, { Request, Response } from "express"
const router = express.Router()

/**
 * @api {get} /v1/caesar/encode Encode with Caesar Cipher
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

router.get('/encode', (req:Request, res:Response) => {
  console.log(req.query.plaintext);
  console.log(req.query.direction);
  console.log(req.query.shift);
  res.send(req.query)
})

/**
 * @api {get} /v1/caesar/decode Decode with Caesar Cipher
 * @apiName decode
 * @apiGroup Caesar
 * @apiVersion 0.0.2
 */

export { router };