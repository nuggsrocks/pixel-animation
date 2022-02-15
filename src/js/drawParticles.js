module.exports = (ctx, particles, mappedPixels) => {
  ctx.save()
  for (const particle of particles) {
    const col = Math.floor(particle.x)
    const row = Math.floor(particle.y)

    if (mappedPixels[row] && mappedPixels[row][col]) {
      ctx.fillStyle = mappedPixels[row][col].color
    }

    ctx.fillRect(particle.x, particle.y, particle.size, particle.size)
  }
  ctx.restore()
}
