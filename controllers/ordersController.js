const { Op } = require('sequelize');
const db = require('../models/index');
const Order = db['Orders'];



exports.isOrder_Exist = async (req,res)=>{
  const checkIdOrder = await Order.findOne({ where: { id: req.body.email }});
  if (checkIdOrder) return res.status(401).send({ message: 'La commande existe déjà' });
}


exports.getAllOrders = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.status) {
      where.status = req.query.status
    }
    if (req.query.payement_at) {
      where.payement_at = req.query.payement_at
    }
    if (req.query.price) {
      where.price = req.query.price
    }
    if (req.query.id_sales_revenues) {
      where.id_sales_revenues = req.query.id_sales_revenues
    }
    if (req.query.id_users) {
      where.id_users = req.query.id_users
    }
    const orders = await Order.findAll({
      attributes: [
        'id',
        'payement_at',
        'status',
        'price',
        'id_sales_revenues',
        'id_sales_revenues'
      ],
      where: {
        [Op.and]: [where],
      },
    });
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
    const order = await Order.findByPk(req.params.id)
    res.status(200).json(order)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la commande',
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
    const updatedOrder = await Order.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedOrder })
  } catch (error) {
    res.status(500).json({
      message: "La commande n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByPk(req.params.id)
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
