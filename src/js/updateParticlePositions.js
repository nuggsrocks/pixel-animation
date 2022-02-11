module.exports = (particles) => {
  for (const particle of particles) {
    particle.x += Math.cos(particle.angle)
    particle.y += Math.sin(particle.angle)
  }
}
