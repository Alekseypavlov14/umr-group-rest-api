const Service = require("../models/Service.model")

class ServiceController {
  async post(req, res) {
    const serviceTemplate = req.body.service

    const service = new Service(serviceTemplate)

    await service.save()

    res.json({ service })
  }

  async put(req, res) {
    const id = req.body.id
    const newService = req.body.service

    let service

    try {
      service = await Service.findById(id)
    } catch (e) {
      return res.json({ message: 'Invalid id' })
    }

    if (service === null) return res.json({ message: 'Service is not found' })

    const keys = Object.keys(newService)
    keys.forEach(key => {
      service[key] = newService[key]
    })

    await service.save()

    res.json({ service })
  }

  async delete(req, res) {
    const id = req.body.id

    let service

    try {
      service = await Service.findById(id)
    } catch (e) {
      return res.json({ message: 'Invalid id' })
    }

    if (service === null) return res.json({ message: 'Service is not found' })

    await service.delete()

    res.json({ service })
  }
}

module.exports = new ServiceController()