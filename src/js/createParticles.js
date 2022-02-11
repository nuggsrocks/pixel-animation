module.exports = (numOfParticles, size = 5, angle = 0) => {
  return Array.from(new Array(numOfParticles), () => ({ x: 0, y: 0, size, angle }))
}
