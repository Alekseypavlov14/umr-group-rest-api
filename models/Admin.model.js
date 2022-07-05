const { Schema, model } = require('mongoose')

const adminSchema = new Schema({
  login: { type: String, unique: true },
  password: { type: String, unique: true }
})

const Admin = model('admin', adminSchema)

module.exports = Admin