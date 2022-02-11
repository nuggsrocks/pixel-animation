const handleBorderCollisions = require('../handleBorderCollisions')

describe('handleBorderCollisions', () => {
  it('should set position to zero if outside canvas border', () => {
    const particles = [
      { x: 0, y: -10 },
      { x: -10, y: 0 },
      { x: 20, y: 30 },
      { x: 40, y: 20 }
    ]

    const canvas = document.createElement('canvas')

    canvas.width = 25
    canvas.height = 25

    const expected = particles.map(particle => ({
      x: particle.x < 0 ? canvas.width : particle.x > canvas.width ? 0 : particle.x,
      y: particle.y < 0 ? canvas.height : particle.y > canvas.height ? 0 : particle.y
    }))

    handleBorderCollisions(particles, canvas)

    expect(particles).toEqual(expected)
  })
})
