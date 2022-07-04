const { Router } = require('express')
const FeedbacksController = require('../controllers/feedbacks.controller')

const router = Router()

router.get('/', (req, res) => {
  FeedbacksController.get(req, res)
})

module.exports = router