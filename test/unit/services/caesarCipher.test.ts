import request from "supertest"
import { encipher } from "../../../src/services/caesarCipher"

describe('Caesar Cipher Enciphering', () => {
    it('Forward shift 1 should return \'UFTU UFYU\'', async () => {
        let input:string = "Test Text"
        let direction:string = "+"
        let shift:number = 1
        expect(encipher(input,direction,shift)).toBe("UFTU UFYU")
    })
    it('Forward shift 12 should return \'FQEF FQJF\'', async () => {
      let input:string = "Test Text"
      let direction:string = "+"
      let shift:number = 12
      expect(encipher(input,direction,shift)).toBe("FQEF FQJF")
  })
  it('Forward shift 13 should return \'GRFG GRKG\'', async () => {
        let input:string = "Test Text"
        let direction:string = "+"
        let shift:number = 13
        expect(encipher(input,direction,shift)).toBe("GRFG GRKG")
    })
  it('Reverse shift 1 should return \'SDRS SDWS\'', async () => {
      let input:string = "Test Text"
      let direction:string = "-"
      let shift:number = 1
      expect(encipher(input,direction,shift)).toBe("SDRS SDWS")
  })
  it('Reverse shift 12 should return \'HSGH HSLH\'', async () => {
    let input:string = "Test Text"
    let direction:string = "-"
    let shift:number = 12
    expect(encipher(input,direction,shift)).toBe("HSGH HSLH")
  })
  it('Reverse shift 13 should return \'GRFG GRKG\'', async () => {
      let input:string = "Test Text"
      let direction:string = "-"
      let shift:number = 13
      expect(encipher(input,direction,shift)).toBe("GRFG GRKG")
  })
  })