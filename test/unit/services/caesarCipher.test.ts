import { encipher } from "../../../src/services/caesarCipher"

describe('caesar Cipher Enciphering', () => {
    it('forward shift 1: should return \'UFTU UFYU\'', () => {
      expect(encipher("Test Text1",1,"+",false,true,true)).toBe("UFTUUFYU")
    })
    it('forward shift 12: should return \'FQEF FQJF\'', () => {
      expect(encipher("Test Text1",12,"+",false,true,true)).toBe("FQEFFQJF")
    })
    it('forward shift 13: should return \'GRFG GRKG\'', () => {
      expect(encipher("Test Text1",13,"+",false,true,true)).toBe("GRFGGRKG")
    })
    it('reverse shift 1: should return \'SDRS SDWS\'', () => {
      expect(encipher("Test Text1",1,"-",false,true,true)).toBe("SDRSSDWS")
    })
    it('reverse shift 12: should return \'HSGH HSLH\'', () => {
      expect(encipher("Test Text1",12,"-",false,true,true)).toBe("HSGHHSLH")
    })
    it('reverse shift 13: should return \'GRFG GRKG\'', () => {
      expect(encipher("Test Text1",13,"-",false,true,true)).toBe("GRFGGRKG")
    })
    it('reverse shift 12, maintainCase true: should return \'Hsgh Hslh\'', () => {
      expect(encipher("Test Text1",12,"-",true,true,true)).toBe("HsghHslh")
    })
    it('reverse shift 12, maintainCase false, ignoreForeignChars false: should return \'HSGHHSLH1\'', () => {
      expect(encipher("Test Text1",12,"-",false,false,true)).toBe("HSGHHSLH1")
    })
    it('reverse shift 12, maintainCase false, ignoreForeignChars true, ignoreWhitespace false: should return \'HSGHHSLH\'', () => {
      expect(encipher("Test Text1",12,"-",false,true,false)).toBe("HSGH HSLH")
    })
  })