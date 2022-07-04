const { connect } = require('mongoose')

function connectDB(URI) {
  connect(URI, () => console.log('DB is connected'))
}

module.exports = connectDB