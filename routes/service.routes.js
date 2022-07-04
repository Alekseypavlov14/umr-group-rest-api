const { Router } = require('express')
const ServiceController = require('../controllers/service.controller')

const router = Router()

router.post('/', (req, res) => {
  ServiceController.post(req, res)
})

router.put('/', (req, res) => {
  ServiceController.put(req, res)
})

router.delete('/', (req, res) => {
  ServiceController.delete(req, res)
})

module.exports = router