const mapPixelData = require('../mapPixelData')


describe('mapPixelData()', () => {
  describe('returns red, green, blue, and brightness values for each pixel', () => {
    const cases = []
    for (let i = 0; i < 4; i++) {
      const testCase = {
        imageData: {
          height: Math.floor(Math.random() * 10 + 1),
          width: Math.floor(Math.random() * 10 + 1)
        },
        expected: []
      }

      testCase.imageData.data = Array.from(
        new Array(testCase.imageData.height * testCase.imageData.width),
        (value, key) =>
          (key + 1) % 4 === 0 ? 255 : Math.floor(Math.random() * 255)
      )

      for (let row = 0; row < testCase.imageData.height; row++) {
        testCase.expected[row] = []
        for (let col = 0; col < testCase.imageData.width; col++) {
          const red = testCase.imageData.data[row * 4 * testCase.imageData.width + col * 4]
          const green = testCase.imageData.data[row * 4 * testCase.imageData.width + col * 4 + 1]
          const blue = testCase.imageData.data[row * 4 * testCase.imageData.width + col * 4 + 2]

          const brightness = (red + green + blue) / 3

          testCase.expected[row][col] = { red, green, blue, brightness }
        }
      }

      cases.push(testCase)
    }

    it.each(cases)('should return mapped data for test $#', ({ imageData, expected }) => {
      const result = mapPixelData(imageData)

      expect(result).toEqual(expected)
    })
  })
})
