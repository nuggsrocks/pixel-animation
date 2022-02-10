const createParticles = require('../createParticles')

describe('createParticles', () => {
  it('should return list of given number of particle objects with given size', () => {
    const numOfParticles = 1000
    const size = 5

    const expected = Array.from(new Array(numOfParticles), () => ({x: 0, y: 0, size}))

    expect(createParticles(1000, size)).toEqual(expected)
  })
})
