const Admin = require('./../models/Admin.model')
const bcrypt = require('bcrypt')

class AuthController {
  async post(req, res) {
    const { login, password } = req.body

    const candidate = await Admin.findOne({ login })

    if (candidate) {
      const comparison = await bcrypt.compare(password, candidate.password)

      if (comparison) {
        return res.json({ admin: { login, password } })
      }
    }

    res.json({ message: 'incorrect login or password' })
  }
}

module.exports = new AuthController()