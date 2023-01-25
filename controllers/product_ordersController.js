const db = require('../models/index')
const Product_order = db['Product_orders']

// exports.is_exist = async (email) => {
//   Product_order.findOne(
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

exports.getAllProduct_orders = async (req, res) => {
  try {
    const product_orders = await Product_order.findAll()
    res.status(200).json(product_orders)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les commandes de produit',
      error: error.message,
    })
  }
}

exports.getProduct_order = async (req, res) => {
  try {
    const product_order = await Product_order.findByPk(req.params.id)
    res.status(200).json(product_order)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la commande de produit',
      error: error.message,
    })
  }
}

exports.createProduct_order = async (req, res) => {
  try {
    const newProduct_order = await Product_order.create(req.body)
    res.status(201).json({ message: 'created', data: newProduct_order })
  } catch (error) {
    res.status(500).json({
      message: "La commande de produit n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateProduct_order = async (req, res) => {
  try {
    const updatedProduct_order = await Product_order.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedProduct_order })
  } catch (error) {
    res.status(500).json({
      message: "La commande de produit n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteProduct_order = async (req, res) => {
  try {
    await Product_order.findByPk(req.params.id)
    res.status(200).json({
      message: 'La commande de produit a été supprimée',
    })
  } catch (error) {
    res.status(500).json({
      message: "La commande de produit n'a pas été supprimée",
      error: error.message,
    })
  }
}
