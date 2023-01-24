const db = require('../models/index')
const Order = db['Orders']

// exports.is_exist = async (email) => {
//   User.findOne(
//     {
//       $or: [{ email: email }],
//     },
//     (err, user) => {
//       if (err) throw err
//       if (user) {
//         return true
//       } else {
//         return false
//       }
//     },
//   )
// }

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await User.findAll()
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
