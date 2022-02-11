module.exports = (ctx, particles) => {
  for (const particle of particles) {
    ctx.fillRect(particle.x, particle.y, particle.size, particle.size)
  }
}
