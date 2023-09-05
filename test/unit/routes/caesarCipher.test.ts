import request from "supertest"
import app from "../../../app"

describe('GET /caesar/', () => {
    it('should return \'https://en.wikipedia.org/wiki/Caesar_cipher\'', async () => {
      const res = await request(app).get('/caesar/')
      expect(res.statusCode).toBe(200)
      expect(res.text.length).toBeGreaterThan(0)
      expect(res.text).toBe('https://en.wikipedia.org/wiki/Caesar_cipher')
    })
  })

  