const { Router } = require('express')
const AuthController = require('./../controllers/auth.controller')

const router = Router()

router.post('/', (req, res) => {
  AuthController.post(req, res)
})

module.exports = router