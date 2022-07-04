const bodyParser = require('body-parser')
const express = require('express')
const connect = require('./database/connect')
const createAuth = require('./middleware/auth.middleware')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 4000
const URI = process.env.URI
const LOGIN = process.env.LOGIN
const PASSWORD = process.env.PASSWORD

const auth = createAuth(LOGIN, PASSWORD)

app.use(bodyParser())

app.get('/', (req, res) => {
  res.json({ message: 'UMR Group API' })
})

app.use('/feedbacks', require('./routes/feedbacks.routes'))
app.use('/feedback', require('./routes/feedback.routes'))
app.use('/services', require('./routes/services.routes'))
app.use('/service', auth, require('./routes/service.routes'))

async function start() {
  await connect(URI)

  app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`)
  })
}

start()
