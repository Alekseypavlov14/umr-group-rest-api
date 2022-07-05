const { Schema, model } = require('mongoose')

const serviceSchema = new Schema({
  startPrice: { type: Number, required: true },
  label: { type: String, unique: true, required: true },
  name: { type: String, unique: true, required: true },
  additives: [{ 
    name: { type: String, required: true },
    label: { type: String, required: true },
    price: { type: Number, required: true }
  }]
})

const Service = model('service', serviceSchema)

module.exports = Service