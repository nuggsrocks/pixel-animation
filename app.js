const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static(path.resolve(__dirname, './public')))

app.get('/', (req, res) => {
  res.render('index', {foo: 'bar'})
})

const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'

app.listen(port, host, () =>
  console.log(`Server listening at http://${host}:${port}`)
)
