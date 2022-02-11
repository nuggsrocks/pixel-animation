module.exports = (particles, canvas) => {
  for (const particle of particles) {
    if (particle.x < 0) {
      particle.x = canvas.width
    }
    if (particle.x > canvas.width) {
      particle.x = 0
    }
    if (particle.y < 0) {
      particle.y = canvas.height
    }
    if (particle.y > canvas.height) {
      particle.y = 0
    }
  }
}
