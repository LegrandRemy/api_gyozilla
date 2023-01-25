const db = require('../models/index')
const Product = db['Products']

exports.getAllProducts = async (req, res) => {
  try {
    const Products = await Product.findAll()
    res.status(200).json(Products)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les etapes du menu',
      error: error.message,
    })
  }
}

exports.getProduct = async (req, res) => {
  try {
    const Product = await Product.findByPk(req.params.id)
    res.status(200).json(Product)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les etapes du menu',
      error: error.message,
    })
  }
}

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body)
    res.status(201).json({ message: 'created', data: newProduct })
  } catch (error) {
    res.status(500).json({
      message: "les etapes du menu n'ont pas été créées",
      error: error.message,
    })
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedProduct })
  } catch (error) {
    res.status(500).json({
      message: "les etapes du menu n'ont pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByPk(req.params.id)
    res.status(200).json({
      message: 'les etapes du menu ont été supprimées',
    })
  } catch (error) {
    res.status(500).json({
      message: "les etapes du menu n'ont pas été supprimées",
      error: error.message,
    })
  }
}
