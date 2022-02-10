const obtainImageData = require('../obtainImageData')

describe('obtainImageData', () => {
  it('should draw image on canvas and then get pixel data', () => {
    const mockImage = {width: 10, height: 5}
    const mockCanvas = {
      getContext: (type) => {
        if (type === '2d') {
          return mockCtx
        }
      }
    }
    const mockCtx = {
      drawImage: jest.fn(),
      getImageData: jest.fn()
    }

    obtainImageData(mockImage, mockCanvas)

    expect(mockCtx.drawImage).toHaveBeenCalledWith(mockImage, 0, 0)
    expect(mockCtx.getImageData).toHaveBeenCalledWith(0, 0, mockImage.width, mockImage.height)
  })
})
