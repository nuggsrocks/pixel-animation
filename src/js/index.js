const obtainImageData = require('./obtainImageData')

const img = new Image()

img.onload = () => {
  const canvas = document.createElement('canvas')
  const imageData = obtainImageData(img, canvas)

  console.log(imageData)
}


img.src = 'public/img.jpg'
