const obtainImageData = require('./obtainImageData')

const img = new Image()

img.onload = () => {
  const imageData = obtainImageData(img)

  console.log(imageData)
}

img.src = 'img.jpg'
