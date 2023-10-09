import request from "supertest"
import app from "../../../app"

describe('get /caesar/encode', () => {
    it('should return something', async () => {
      const res = await request(app).get('/caesar/encode')
      expect(res.statusCode).toBe(200)
      expect(res.text.length).toBeGreaterThan(0)
    })
  })

  