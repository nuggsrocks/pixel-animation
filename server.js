const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'

app.listen(port, host, () =>
  console.log(`Server listening at http://${host}:${port}`)
)
