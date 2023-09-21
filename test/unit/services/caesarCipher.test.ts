import request from "supertest"
import { encipher } from "../../../src/services/caesarCipher"

describe('Caesar Cipher Enciphering', () => {
    it('Forward shift 1 should return \'UFTU UFYU\'', async () => {
        let input:string = "Test Text"
        let direction:string = "+"
        let shift:number = 1
        expect(encipher(input,direction,shift)).toBe("UFTU UFYU")
    })

  })
  describe('',()=>{
    it('Forward shift 13 should return \'GRFG GRKG\'', async () => {
        let input:string = "Test Text"
        let direction:string = "+"
        let shift:number = 13
        expect(encipher(input,direction,shift)).toBe("GRFG GRKG")
    })
  })