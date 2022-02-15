module.exports = (particles, canvas) => {
  for (const particle of particles) {
    particle.x = particle.x < 0 ? canvas.width : particle.x > canvas.width ? 0 : particle.x
    particle.y = particle.y < 0 ? canvas.height : particle.y > canvas.height ? 0 : particle.y

    if ((particle.x === 0 || particle.x === canvas.width) && (particle.y !== 0 && particle.y !== canvas.height)) {
      particle.y = Math.random() * canvas.height
    }

    if ((particle.y === 0 || particle.y === canvas.height) && (particle.x !== 0 && particle.x !== canvas.width)) {
      particle.x = Math.random() * canvas.width
    }
  }
}
