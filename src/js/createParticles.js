module.exports = (numOfParticles, { x = 0, y = 0, size = 5, angle = 0 } = {}) => {
  return Array.from(new Array(numOfParticles), () => ({ x, y, size, angle }))
}
