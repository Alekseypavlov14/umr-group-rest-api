const Service = require("../models/Service.model")

class ServicesController {
  async getById(req, res) {
    const id = req.params.id

    let candidate 

    try {
      candidate = await Service.findById(id)
    } catch (e) {
      return res.json({ message: 'incorrect id' })
    }

    if (!candidate) {
      return res.json({ message: 'service is not found' })
    }

    res.json({ service: candidate })
  }

  async get(req, res) {
    const services = await Service.find({})

    res.json({ services })
  }
}

module.exports = new ServicesController()