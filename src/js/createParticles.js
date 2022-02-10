module.exports = (numOfParticles, size = 5) => {
  return Array.from(new Array(numOfParticles), () => ({x: 0, y: 0, size}))
}
