import request from "supertest"
import { encipher } from "../../../src/services/caesarCipher"

describe('Caesar Cipher Enciphering', () => {
    it('Forward shift 1, maintainCase false and ignoreForeignChars false should return \'UFTU UFYU\'', async () => {
        expect(encipher("Test Text",1)).toBe("UFTU UFYU")
    })
    it('Forward shift 12, maintainCase false and ignoreForeignChars false should return \'FQEF FQJF\'', async () => {
      expect(encipher("Test Text",12)).toBe("FQEF FQJF")
    })
    it('Forward shift 13, maintainCase false and ignoreForeignChars false should return \'GRFG GRKG\'', async () => {
          expect(encipher("Test Text",13)).toBe("GRFG GRKG")
    })
    it('Reverse shift 1, maintainCase false and ignoreForeignChars false should return \'SDRS SDWS\'', async () => {
        expect(encipher("Test Text",1,"-")).toBe("SDRS SDWS")
    })
    it('Reverse shift 12, maintainCase false and ignoreForeignChars false should return \'HSGH HSLH\'', async () => {
      expect(encipher("Test Text",12,"-")).toBe("HSGH HSLH")
    })
    it('Reverse shift 13, maintainCase false and ignoreForeignChars false should return \'GRFG GRKG\'', async () => {
        expect(encipher("Test Text",13,"-")).toBe("GRFG GRKG")
    })
    it('Reverse shift 12, maintainCase true and ignoreForeignChars false should return \'Grfg Grkg\'', async () => {
      expect(encipher("Test Text",12,"-",true)).toBe("Grfg Grkg")
    })
    it('Reverse shift 12, maintainCase false and ignoreForeignChars true should return \'GRFGGRKG\'', async () => {
      expect(encipher("Test Text",12,"-",false,true)).toBe("GRFGGRKG")
    })


  
  })