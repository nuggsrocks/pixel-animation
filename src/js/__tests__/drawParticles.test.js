const drawParticles = require('../drawParticles')
const mockImageData = require('../../../__mocks__/mockImageData')


describe('drawParticles', () => {
  describe('draws particles on given canvas at their respective locations', () => {
    const imageData = mockImageData(10, 5)

    it.each([
      {x: 0, y: 1.7, size: 3},
      {x: 1, y: 2.4, size: 1},
      {x: 7.9, y: 0.1, size: 2},
    ])('should draw %j at point x, y with correct size', (particle) => {
      const mockCanvas = document.createElement('canvas')
      const mockCtx = mockCanvas.getContext('2d')

      drawParticles(mockCtx, [particle], imageData.mapped)

      expect(mockCtx.__getEvents().find(obj => obj.type === 'fillStyle')).not.toBeUndefined()
      expect(mockCtx.fillRect).toHaveBeenCalledWith(particle.x, particle.y, particle.size, particle.size)
    })
  })
})
