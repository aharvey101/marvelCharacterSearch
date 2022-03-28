const app = require('../app')
const request = require('supertest')

describe('Server Tests', () => {
  it('Responds with appropriatly ', async () => {
    const res = await request(app).get('/').query({
      nameStartsWith: 'Cap',
    })
    expect(res.statusCode).toEqual(200)
    res.body.data.results.map((character) => {
      expect(character.name === /^Thor/g).toBe(false)
    })
  })
})
