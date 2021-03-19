const express = require('express')
const db = require('../database')
const app = express()
const port = 3000
const server = 'http://localhost:'



app.get('/qa/questions', (req, res) => {
    res.send('works')
})

app.listen(port, () => {
  console.log(`SDC listening at ${server}${port}`)
})
