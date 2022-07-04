const { Router } = require('express')
const ServiceController = require('../controllers/service.controller')

const router = Router()

router.post('/', (req, res) => {
  ServiceController.post(req, res)
})

module.exports = router