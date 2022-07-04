const Feedback = require('./../models/Feedback.model')

class FeedbacksController {
  async get(req, res) {
    const feedbacks = await Feedback.find({})

    res.json({ feedbacks })
  } 
}

module.exports = new FeedbacksController()