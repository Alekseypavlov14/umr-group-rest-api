const { Schema, model } = require('mongoose')

const adminSchema = new Schema({
  login: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true }
})

const Admin = model('admin', adminSchema)

module.exports = Admin