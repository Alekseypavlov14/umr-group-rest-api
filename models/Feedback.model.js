const { Schema, model } = require('mongoose')

const feedbackSchema = new Schema({
  author: { type: String, unique: true },
  content: { type: String, unique: true }
})

const Feedback = model('feedback', feedbackSchema)

module.exports = Feedback