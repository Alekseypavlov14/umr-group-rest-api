const Feedback = require("../models/Feedback.model")

class FeedbackController {
  async post(req, res) {
    const feedbackTemplate = req.body.feedback

    let feedback 
    
    try {
      feedback = new Feedback(feedbackTemplate)
      await feedback.save()
    } catch (e) {
      return res.json({ message: 'incorrect data' })
    }

    res.json({ feedback })
  }
}

module.exports = new FeedbackController()