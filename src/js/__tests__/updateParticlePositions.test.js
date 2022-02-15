const updateParticlePositions = require('../updateParticlePositions')

describe('updateParticlePositions', () => {
  describe('updates each particle\'s position according to its angle', () => {
    let testCases = []
    for (let i = 0; i < 10; i++) {
      const testCase = {
        particle: {
          x: Math.random() * 25,
          y: Math.random() * 25,
          angle: Math.random() * Math.PI * 2
        }
      }
      testCase.expected = {
        x: testCase.particle.x + Math.cos(testCase.particle.angle),
        y: testCase.particle.y + Math.sin(testCase.particle.angle)
      }

      testCases.push(testCase)
    }

    it.each(
      testCases
    )('should update position of $particle to $expected', ({ particle, expected }) => {

      updateParticlePositions([particle])

      expect(particle).toHaveProperty('x', expected.x)
      expect(particle).toHaveProperty('y', expected.y)
    })
  })
})
