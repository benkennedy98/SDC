const express = require('express')
const db = require('../database')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const server = 'http://localhost:'

app.use(bodyParser.json())

const answersRoute =  require('../routes/answers')
const questionsRoute = require('../routes/questions')

app.use('/qa/questions/:question_id/questions', answersRoute)
app.use('/qa/questions', questionsRoute)

app.listen(port, () => {
  console.log(`SDC listening at ${server}${port}`)
})


// sed -i '' -e 's/old/new/g' list.csv
// mongoimport --type csv -d test -c answers --headerline --drop Copy\ of\ answers.csv