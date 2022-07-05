const express = require('express')
const bodyParser = require('body-parser')
const connect = require('./database/connect')
const auth = require('./middleware/auth.middleware')
const cors = require('cors')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 4000
const URI = process.env.URI

app.use(bodyParser())
app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'UMR Group API' })
})

app.use('/feedbacks', require('./routes/feedbacks.routes'))
app.use('/feedback', require('./routes/feedback.routes'))
app.use('/services', require('./routes/services.routes'))
app.use('/service', auth, require('./routes/service.routes'))
app.use('/auth', require('./routes/auth.routes'))

app.all('*', (req, res) => {
  res.json({ message: 'invalid path' })
})

async function start() {
  await connect(URI)

  app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`)
  })
}

start()
