const db = require('../models/index')
const Product_ressource = db['product_ressources_receipts']

exports.getAllproduct_ressources_receipts = async (req, res) => {
  try {
    const product_ressources_receipts = await Product_ressource.findAll()
    res.status(200).json(product_ressources_receipts)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les ingrédients de produit',
      error: error.message,
    })
  }
}

exports.getProduct_ressource = async (req, res) => {
  try {
    const product_ressource = await Product_ressource.findByPk(req.params.id)
    res.status(200).json(product_ressource)
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer l'ingrédient de produit",
      error: error.message,
    })
  }
}

exports.createProduct_ressource = async (req, res) => {
  try {
    const newProduct_ressource = await Product_ressource.create(req.body)
    res.status(201).json({ message: 'created', data: newProduct_ressource })
  } catch (error) {
    res.status(500).json({
      message: "L'ingrédient de produit n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateProduct_ressource = async (req, res) => {
  try {
    const updatedProduct_ressource = await Product_ressource.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedProduct_ressource })
  } catch (error) {
    res.status(500).json({
      message: "L'ingrédient de produit n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteProduct_ressource = async (req, res) => {
  try {
    await Product_ressource.findByPk(req.params.id)
    res.status(200).json({
      message: "L'ingrédient de produit a été supprimé",
    })
  } catch (error) {
    res.status(500).json({
      message: "L'ingrédient de produit n'a pas été supprimé",
      error: error.message,
    })
  }
}
