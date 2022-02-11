const obtainImageData = require('../obtainImageData')

describe('obtainImageData', () => {
  it('should draw image on canvas and then get pixel data', () => {
    const mockImage = new Image(10, 5)
    const mockCanvas = document.createElement('canvas')
    const mockCtx = mockCanvas.getContext('2d')

    obtainImageData(mockImage, mockCanvas)

    expect(mockCtx.drawImage).toHaveBeenCalledWith(mockImage, 0, 0)
    expect(mockCtx.getImageData).toHaveBeenCalledWith(0, 0, mockImage.width, mockImage.height)
  })
})
