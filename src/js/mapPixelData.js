module.exports = (imageData) => {
  const mappedImg = []
  for (let row = 0; row < imageData.height; row++) {
    if (!mappedImg[row]) {
      mappedImg[row] = []
    }
    for (let col = 0; col < imageData.width; col++) {
      const red = imageData.data[row * 4 * imageData.width + col * 4]
      const green = imageData.data[row * 4 * imageData.width + col * 4 + 1]
      const blue = imageData.data[row * 4 * imageData.width + col * 4 + 2]

      const brightness = (red + green + blue) / 3

      mappedImg[row][col] = {
        brightness,
        red,
        green,
        blue
      }
    }
  }
  return mappedImg
}
