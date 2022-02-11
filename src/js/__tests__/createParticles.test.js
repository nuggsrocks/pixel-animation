const createParticles = require('../createParticles')

describe('createParticles', () => {
  it('should return list of given number of particle objects with given attributes', () => {
    const numOfParticles = 10
    const size = 5
    const angle = Math.PI

    const expected = Array.from(new Array(numOfParticles), () => ({ x: 0, y: 0, size, angle }))

    expect(createParticles(numOfParticles, size, angle)).toEqual(expected)
  })
})
