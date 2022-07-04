const bodyParser = require('body-parser')
const express = require('express')
const connect = require('./database/connect')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000
const URI = process.env.URI

app.use(bodyParser())

app.use('/feedbacks', require('./routes/feedbacks.routes'))
app.use('/feedback', require('./routes/feedback.routes'))

async function start() {
  await connect(URI)

  app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`)
  })
}

start()
