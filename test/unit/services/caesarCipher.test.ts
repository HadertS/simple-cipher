import request from "supertest"
import { encipher } from "../../../src/services/caesarCipher"

describe('Caesar Cipher Enciphering', () => {
    it('should return \'UFTU UFYU\'', async () => {
        let input:string = "Test Text"
        let direction:string = "+"
        let shift:number = 1
        expect(encipher(input,direction,shift)).toBe("UFTU UFYU")
    })
  })