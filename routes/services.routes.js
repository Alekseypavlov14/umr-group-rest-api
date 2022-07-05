const { Router } = require('express')
const ServicesController = require('./../controllers/services.controller')

const router = Router()

router.get('/', (req, res) => {
  ServicesController.get(req, res)
})

router.get('/:id', (req, res) => {
  ServicesController.getById(req, res)
})

module.exports = router