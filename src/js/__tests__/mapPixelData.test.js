const mapPixelData = require('../mapPixelData')
const mockImageData = require('../../../__mocks__/mockImageData')


describe('mapPixelData()', () => {
  describe('returns rgb and brightness values for each pixel', () => {
    const cases = []
    for (let i = 0; i < 4; i++) {
      cases.push(
        mockImageData(Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1))
      )
    }

    it.each(cases)('should return mapped data for test $#', (imageData) => {
      const result = mapPixelData(imageData)

      expect(result).toEqual(imageData.mapped)
    })
  })
})
