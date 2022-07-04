function createAuth(login, password) {
  return function auth(req, res, next) {
    if (req.body.login !== login || req.body.password !== password) {
      return res.json({ message: 'The authentication is required' })
    }

    next()
  }
}

module.exports = createAuth