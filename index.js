const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Is Working')
})

app.listen(PORT, () => console.log(`Server is working on port ${PORT}`))