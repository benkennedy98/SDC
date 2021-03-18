const express = require('express')
const app = express()
const port = 3000
const server = 'http://localhost:'

app.get('/questions', (req, res) => {
    console.log(req.query)
})

app.listen(port, () => {
  console.log(`Example app listening at ${server}${port}`)
})
