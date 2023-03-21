const { Op } = require('sequelize')
const db = require('../models/index')
const OrderLine = db['OrderLines']
const _ = require('lodash')

exports.isOrder_Exist = async (req, res) => {
  const checkIdOrderLine = await OrderLine.findOne({
    where: { id: req.body.email },
  })
  if (checkIdOrderLine) return res.status(401).send({ message: 'existe déjà' })
}

exports.getAllOrderLines = async (req, res) => {
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
    const orderLine = await OrderLine.findAll({
      // attributes: ['id_orders', 'id_products'],
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(orderLine)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer',
      error: error.message,
    })
  }
}

exports.getOrderLine = async (req, res) => {
  try {
    const orderLine = await OrderLine.findByPk(req.params.id)
    res.status(200).json(orderLine)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer',
      error: error.message,
    })
  }
}

exports.createOrderLine = async (req, res) => {
  try {
    const newOrderLine = await OrderLine.create(req.body)
    res.status(201).json({ message: 'created', data: newOrderLine })
  } catch (error) {
    res.status(500).json({
      message: 'pas été créée',
      error: error.message,
    })
  }
}

exports.updateOrderLine = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await OrderLine.describe()
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
    const oldOrderLine = await OrderLine.findByPk(req.params.id)
    const updatedOrderLine = await OrderLine.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newOrderLine = await OrderLine.findByPk(req.params.id)
    const updatedProperties = _.omitBy(newOrderLine.dataValues, (value, key) =>
      _.isEqual(value, oldOrderLine.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])
    res.status(200).json({ message: 'Mis à jour', data: response })
  } catch (error) {
    res.status(500).json({
      message: 'pas été mis à jour',
      error: error.message,
    })
  }
}

exports.deleteOrderLine = async (req, res) => {
  try {
    await OrderLine.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: 'La ligne de commande a été supprimé',
    })
  } catch (error) {
    res.status(500).json({
      message: 'La ligne de commande n\'a pas été supprimé',
      error: error.message,
    })
  }
}
