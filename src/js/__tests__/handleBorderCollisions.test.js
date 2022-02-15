const handleBorderCollisions = require('../handleBorderCollisions')

describe('handleBorderCollisions', () => {
  describe('resets position of particles if they are outside canvas border (resets to opposite side)', () => {
    const canvas = document.createElement('canvas')

    canvas.width = 25
    canvas.height = 25

    it.each([
      { particle: { x: 0, y: -10 }, expected: { x: expect.any(Number), y: canvas.height } },
      { particle: { x: -10, y: 0 }, expected: { x: canvas.width, y: expect.any(Number) } },
      { particle: { x: canvas.width - 5, y: canvas.height + 5 }, expected: { x: expect.any(Number), y: 0 } },
      { particle: { x: canvas.width + 10, y: -10 }, expected: { x: 0, y: canvas.height } }
    ])('should reset position of $particle to $expected', ({
      particle,
      expected,
    }) => {
      handleBorderCollisions([particle], canvas)

      expect(particle).toMatchObject(expected)
    })
  })
})
