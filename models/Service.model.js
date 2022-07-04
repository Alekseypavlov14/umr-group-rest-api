const { Schema, model } = require('mongoose')

const serviceSchema = new Schema({
  startPrice: { type: Number },
  label: { type: String, unique: true },
  name: { type: String, unique: true },
  additives: [{ 
    name: { type: String },
    label: { type: String },
    price: { type: Number }
  }]
})

const Service = model('service', serviceSchema)

module.exports = Service