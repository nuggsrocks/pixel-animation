const mapPixelData = require('../mapPixelData')


describe('mapPixelData()', () => {
  it('should return red, green, blue, and brightness values for each pixel', () => {
    const mockPixelData = Array.from(new Array(40), (v, k) => (k + 1) % 4 === 0 ? 255 : Math.floor(Math.random() * 255 + 1))

    const mockImageData = {
      data: mockPixelData,
      height: 4,
      width: 10
    }

    const result = mapPixelData(mockImageData)

    const expected = []

    for (let row = 0; row < mockImageData.height; row++) {
      expected[row] = []
      for (let col = 0; col < mockImageData.width; col++) {
        const red = mockPixelData[row * 4 * mockImageData.width + col * 4]
        const green = mockPixelData[row * 4 * mockImageData.width + col * 4 + 1]
        const blue = mockPixelData[row * 4 * mockImageData.width + col * 4 + 2]

        const brightness = (red + green + blue) / 3

        expected[row][col] = { red, green, blue, brightness }
      }
    }

    expect(result).toEqual(expected)
  })
})
