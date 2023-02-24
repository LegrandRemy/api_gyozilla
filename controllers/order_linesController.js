const { Op } = require('sequelize')
const db = require('../models/index')
const Order = db['Orders']

exports.isOrder_Exist = async (req, res) => {
  const checkIdOrder = await Order.findOne({ where: { id: req.body.email } })
  if (checkIdOrder)
    return res.status(401).send({ message: 'La commande existe déjà' })
}

exports.getAllOrder_lines = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.id_orders) {
      where.id_orders = req.query.id_orders
    }
    if (req.query.id_products) {
      where.id_products = req.query.id_products
    }
    if (req.query.quantity) {
      where.quantity = req.query.quantity
    }
    const orders = await Order.findAll({
      attributes: ['id_orders', 'id_products'],
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(orders)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer',
      error: error.message,
    })
  }
}

exports.getOrder_line = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id)
    res.status(200).json(order)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer',
      error: error.message,
    })
  }
}

exports.createOrder_line = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body)
    res.status(201).json({ message: 'created', data: newOrder })
  } catch (error) {
    res.status(500).json({
      message: 'pas été créée',
      error: error.message,
    })
  }
}

exports.updateOrder_line = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await Order.describe()
    const invalidFields = []
    for (let i = 0; i < keys.length; i++) {
      if (!columns.hasOwnProperty(keys[i])) {
        invalidFields.push(keys[i])
      }
    }
    if (invalidFields.length) {
      return res.status(400).json({
        message: `Le ou les champs qui n'existent pas : ${invalidFields.join(
          ', ',
        )}`,
      })
    }
    const oldOrder = await Order.findByPk(req.params.id)
    const updatedOrder = await Order.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newOrder = await Order.findByPk(req.params.id)
    const updatedProperties = _.omitBy(newOrder.dataValues, (value, key) =>
      _.isEqual(value, oldOrder.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])
    res.status(200).json({ message: 'Mis à jour', data: response })
  } catch (error) {
    res.status(500).json({
      message: "La commande n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteOrder_line = async (req, res) => {
  try {
    await Order.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: '=supprimée',
    })
  } catch (error) {
    res.status(500).json({
      message: 'pas été supprimée',
      error: error.message,
    })
  }
}
