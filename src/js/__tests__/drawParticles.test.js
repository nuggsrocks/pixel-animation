const drawParticles = require('../drawParticles')


describe('drawParticles', () => {
  describe('draws particles on given canvas at their respective locations', () => {
    it.each([
      {x: 0, y: 10, size: 5},
      {x: 15, y: 20, size: 10},
      {x: 100, y: 0, size: 2},
    ])('should draw %j at point x, y with correct size', (particle) => {
      const mockCanvas = document.createElement('canvas')
      const mockCtx = mockCanvas.getContext('2d')

      drawParticles(mockCtx, [particle])

      expect(mockCtx.fillRect).toHaveBeenCalledWith(particle.x, particle.y, particle.size, particle.size)
    })
  })
})
