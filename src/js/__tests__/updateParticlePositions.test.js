const updateParticlePositions = require('../updateParticlePositions')

describe('updateParticlePositions', () => {
  it('should update each particle\'s position according to its angle', () => {
    const particles = Array.from(new Array(10), () => ({
      x: Math.random() * 500,
      y: Math.random() * 500,
      angle: Math.random() * Math.PI * 2
    }))

    const expected = particles.map(particle => ({
      x: particle.x + Math.cos(particle.angle),
      y: particle.y + Math.sin(particle.angle),
      angle: particle.angle
    }))

    updateParticlePositions(particles)

    expect(particles).toEqual(expected)
  })
})
