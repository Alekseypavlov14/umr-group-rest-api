const { Schema, model } = require('mongoose')

const feedbackSchema = new Schema({
  author: { type: String, required: true },
  content: { type: String, required: true }
})

const Feedback = model('feedback', feedbackSchema)

module.exports = Feedback