const { Op } = require('sequelize')
const db = require('../models/index')
const Order = db['Orders']
const _ = require('lodash')

const OrderLines = db['OrderLines'];
const Products = db['Products'];
const Menus = db['Menus'];

exports.isOrder_Exist = async (req, res) => {
  const checkIdOrder = await Order.findOne({ where: { id: req.body.email } })
  if (checkIdOrder)
    return res.status(401).send({ message: 'La commande existe déjà' })
}

exports.getAllOrders = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.id_customers) {
      where.id_customers = req.query.id_customers
    }
    if (req.query.status) {
      where.status = req.query.status
    }
    if (req.query.total_price) {
      where.total_price = req.query.total_price
    }
    if (req.query.id_status) {
      where.id_status = req.query.id_status
    }
    if (req.query.id_franchises) {
      where.id_franchises = req.query.id_franchises
    }
    if (req.query.date_order) {
      where.date_order = req.query.date_order
    }
    if (req.query.id_type_oders) {
      where.id_type_oders = req.query.id_type_oders
    }
    const orders = await Order.findAll({
      where: {
        [Op.and]: [where],
      },
      include: ['order_type'],
    })
    res.status(200).json(orders)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les commandes',
      error: error.message,
    })
  }
}

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: ['order_type'],
    })
    res.status(200).json(order)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la commande',
      error: error.message,
    })
  }
}

exports.getOrderByCustomer = async (req, res) => {
  const id = req.params.id
  try {
    const orders = await Order.findAll({
      where: { id_customers: id },
      include: [
        'order_type',
        'order_status',
        {
          model: OrderLines,
          as: 'order_lines',
          include: {
            model: Products,
            as: 'products',
            include: {
              model: Menus,
              as: 'menu'
            }
          }
        }
      ]
    })
    res.status(200).json({
      message: 'getAllOrderCustomers',
      data: orders,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Impossible de récupérer les commandes de l'utilisateur",
      error: error,
    })
  }
}

exports.getOneOrderByCustomer = async (req, res) => {
  const customerId = req.params.customerId
  const orderId = req.params.orderId
  try {
    const order = await Order.findAll({
      where: { id_customers: customerId, id: orderId },
      include: [
        'order_type',
        'order_status',
        {
          model: OrderLines,
          as: 'order_lines',
          include: {
            model: Products,
            as: 'products',
            include: {
              model: Menus,
              as: 'menu'
            }
          }
        }
      ]
    })
    res.status(200).json({
      message: 'getOneOrderByCustomers',
      data: order,
    })
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer la commandes de l'utilisateur",
      error: error.message,
    })
  }
}

exports.getAllOrdersByFranchise = async (req, res) => {
  const franchiseId = req.params.franchiseId
  try {
    const orders = await Order.findAll({
      where: { id_franchises: franchiseId },
    })
    res.status(200).json({
      message: 'getAllOrdersByFranchise',
      data: orders,
    })
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer les commandes de la franchise",
      error: error.message,
    })
  }
}

exports.getOrderByStatus = async (req, res) => {
  const idStatus = req.params.idStatus
  try {
    const orders = await Order.findAll({
      where: { id_status: idStatus },
      include: ['status'],
    })
    res.status(200).json({
      message: 'getAllOrderStatus',
      data: orders,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les commandes par leur status',
      error: error.message,
    })
  }
}

exports.createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body)
    res.status(201).json({ message: 'created', data: newOrder })
  } catch (error) {
    res.status(500).json({
      message: "La commande n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateOrder = async (req, res) => {
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

exports.deleteOrder = async (req, res) => {
  try {
    await Order.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: 'La commande a été supprimée',
    })
  } catch (error) {
    res.status(500).json({
      message: "La commande n'a pas été supprimée",
      error: error.message,
    })
  }
}
