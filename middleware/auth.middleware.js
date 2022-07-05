const Admin = require("../models/Admin.model")
const bcrypt = require('bcrypt')

async function auth(req, res, next) {
  const { login, password } = req.body

  const candidate = await Admin.findOne({ login })

  if (candidate) {
    const comparison = await bcrypt.compare(password, candidate.password)

    if (comparison) {
      return next()
    }
  }

  return res.json({ message: 'The authentication is required' })
}

module.exports = auth