import { encipher } from "../../../src/services/caesarCipher"

describe('caesar Cipher Enciphering', () => {
    it('forward shift 1, maintainCase false and ignoreForeignChars false should return \'UFTU UFYU\'', () => {
      expect(encipher("Test Text",1)).toBe("UFTU UFYU")
    })
    it('forward shift 12, maintainCase false and ignoreForeignChars false should return \'FQEF FQJF\'', () => {
      expect(encipher("Test Text",12)).toBe("FQEF FQJF")
    })
    it('forward shift 13, maintainCase false and ignoreForeignChars false should return \'GRFG GRKG\'', () => {
      expect(encipher("Test Text",13)).toBe("GRFG GRKG")
    })
    it('reverse shift 1, maintainCase false and ignoreForeignChars false should return \'SDRS SDWS\'', () => {
      expect(encipher("Test Text",1,"-")).toBe("SDRS SDWS")
    })
    it('reverse shift 12, maintainCase false and ignoreForeignChars false should return \'HSGH HSLH\'', () => {
      expect(encipher("Test Text",12,"-")).toBe("HSGH HSLH")
    })
    it('reverse shift 13, maintainCase false and ignoreForeignChars false should return \'GRFG GRKG\'', () => {
      expect(encipher("Test Text",13,"-")).toBe("GRFG GRKG")
    })
    it('reverse shift 12, maintainCase true and ignoreForeignChars false should return \'Hsgh Hslh\'', () => {
      expect(encipher("Test Text",12,"-",true)).toBe("Hsgh Hslh")
    })
    it('reverse shift 12, maintainCase false and ignoreForeignChars true should return \'HSGHHSLH\'', () => {
      expect(encipher("Test Text",12,"-",false,true)).toBe("HSGHHSLH")
    })
  })