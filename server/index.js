const express = require('express')
const app = express()
const port = 3000
const server = 'http://localhost:'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at ${server}${port}`)
})
