const { Op } = require('sequelize')
const db = require('../models/index')
const OrderType = db['OrderTypes']
const _ = require('lodash')

exports.getAllOrderTypes = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.name) {
      where.name = req.query.name
    }
    const orderType = await OrderType.findAll({
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(orderType)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer',
      error: error.message,
    })
  }
}

exports.getOrderType = async (req, res) => {
  try {
    const orderType = await OrderType.findByPk(req.params.id)
    res.status(200).json(orderType)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer',
      error: error.message,
    })
  }
}

exports.createOrderType = async (req, res) => {
  try {
    const newOrderType = await OrderType.create(req.body)
    res.status(201).json({ message: 'created', data: newOrderType })
  } catch (error) {
    res.status(500).json({
      message: 'pas été créée',
      error: error.message,
    })
  }
}

exports.deleteOrderType = async (req, res) => {
  try {
    await OrderType.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: 'Le type de commande a été supprimé',
    })
  } catch (error) {
    res.status(500).json({
      message: 'Le type de commande n\'a pas été supprimé',
      error: error.message,
    })
  }
}
