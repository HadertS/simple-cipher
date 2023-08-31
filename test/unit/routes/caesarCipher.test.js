const request = require("supertest")
const app = require("../../../app.js")

describe('GET /caesar/', () => {
    it('should return \'Caesar Cipher home page\'', async () => {
      const res = await request(app).get('/caesar/')
      expect(res.statusCode).toBe(200)
      expect(res.text.length).toBeGreaterThan(0)
      expect(res.text).toBe('Caesar Cipher home page')
    })
  })


describe('GET /caesar/about', () => {
    it('should return \'https://en.wikipedia.org/wiki/Caesar_cipher\'', async () => {
      const res = await request(app).get('/caesar/about')
      expect(res.statusCode).toBe(200)
      expect(res.text.length).toBeGreaterThan(0)
      expect(res.text).toBe('https://en.wikipedia.org/wiki/Caesar_cipher')
    })
  })