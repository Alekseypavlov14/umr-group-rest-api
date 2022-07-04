const Service = require("../models/Service.model")

class ServiceController {
  async post(req, res) {
    const serviceTemplate = req.body.service

    const service = new Service({ ...serviceTemplate })

    await service.save()

    res.json({ service })
  }
}

module.exports = new ServiceController()