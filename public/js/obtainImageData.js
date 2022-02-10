const obtainImageData = (loadedImg, canvas) => {
  canvas.height = loadedImg.height
  canvas.width = loadedImg.width

  const ctx = canvas.getContext('2d')

  ctx.drawImage(loadedImg, 0, 0)

  return ctx.getImageData(0, 0, canvas.width, canvas.height)

}

module.exports = obtainImageData
