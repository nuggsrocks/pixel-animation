const drawParticles = require('../drawParticles')


describe('drawParticles', () => {
  it('should draw particles on given canvas at their respective locations', () => {
    const particles = [
      {x: 0, y: 10, size: 5},
      {x: 15, y: 20, size: 10},
      {x: 100, y: 0, size: 2},
    ]

    const mockCanvas = document.createElement('canvas')
    const mockCtx = mockCanvas.getContext('2d')

    drawParticles(mockCtx, particles)

    for (const particle of particles) {
      expect(mockCtx.fillRect).toHaveBeenCalledWith(particle.x, particle.y, particle.size, particle.size)
    }
  })
})
