module.exports = (width, height) => {
  const mockData = { width, height }

  mockData.data = Array.from(
    new Array(width * height * 4),
    (value, key) =>
      (key + 1) % 4 === 0 ? 255 : Math.floor(Math.random() * 255)
  )

  mockData.mapped = []

  for (let row = 0; row < height; row++) {
    if (!mockData.mapped[row]) {
      mockData.mapped[row] = []
    }
    for (let col = 0; col < width; col++) {
      const red = mockData.data[row * 4 * width + col * 4]
      const green = mockData.data[row * 4 * width + col * 4 + 1]
      const blue = mockData.data[row * 4 * width + col * 4 + 2]

      const brightness = (red + green + blue) / 3

      mockData.mapped[row][col] = {
        brightness,
        color: `rgb(${red},${green},${blue})`
      }
    }
  }

  return mockData
}
