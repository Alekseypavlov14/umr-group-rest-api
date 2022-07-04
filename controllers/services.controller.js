const Service = require("../models/Service.model")

class ServicesController {
  async get(req, res) {
    const services = await Service.find({})

    res.json({ services })
  }
}

module.exports = new ServicesController()