const { Schema, model } = require('mongoose')

const feedbackSchema = new Schema({
  author: { type: String },
  content: { type: String }
})

const Feedback = model('feedback', feedbackSchema)

module.exports = Feedback