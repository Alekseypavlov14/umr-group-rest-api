const Feedback = require('./../models/Feedback.model')

class FeedbacksController {
  async get(req, res) {
    const feedbacks = await (await Feedback.find({})).reverse()

    res.json({ feedbacks })
  } 
}

module.exports = new FeedbacksController()