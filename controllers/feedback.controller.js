const Feedback = require("../models/Feedback.model")

class FeedbackController {
  async post(req, res) {
    const feedbackTemplate = req.body.feedback

    const feedback = new Feedback({ ...feedbackTemplate })

    await feedback.save()

    res.json({ feedback })
  }
}

module.exports = new FeedbackController()