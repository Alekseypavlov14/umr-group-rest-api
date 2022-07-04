const { Router } = require('express')
const FeedbackController = require('../controllers/feedback.controller')

const router = Router()

router.post('/', (req, res) => {
  FeedbackController.post(req, res)
})

module.exports = router