const { Coffee } = require('../models')

module.exports = {
  // Get all coffees (ดึงข้อมูลกาแฟทั้งหมด)
  async index (req, res) {
    try {
      const coffees = await Coffee.findAll()
      res.send(coffees)
    } catch (err) {
      res.status(500).send({
        error: 'The coffee information was incorrect'
      })
    }
  },

  // Create coffee (สร้างเมนูกาแฟใหม่)
  async create (req, res) {
    try {
      const coffee = await Coffee.create(req.body)
      res.send(coffee.toJSON())
    } catch (err) {
      res.status(500).send({
        error: 'Create coffee incorrect'
      })
    }
  },

  // Update coffee (แก้ไขข้อมูลกาแฟ)
  async put (req, res) {
    try {
      await Coffee.update(req.body, {
        where: {
          id: req.params.coffeeId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Update coffee incorrect'
      })
    }
  },

  // Delete coffee (ลบเมนูกาแฟ)
  async remove (req, res) {
    try {
      const coffee = await Coffee.findOne({
        where: {
          id: req.params.coffeeId
        }
      })

      if (!coffee) {
        return res.status(403).send({
          error: 'The coffee information was incorrect'
        })
      }

      await coffee.destroy()
      res.send(coffee)
    } catch (err) {
      res.status(500).send({
        error: 'The coffee information was incorrect'
      })
    }
  },

  // Get coffee by id (ดูข้อมูลกาแฟรายเมนู)
  async show (req, res) {
    try {
      const coffee = await Coffee.findByPk(req.params.coffeeId)
      res.send(coffee)
    } catch (err) {
      res.status(500).send({
        error: 'The coffee information was incorrect'
      })
    }
  }
}