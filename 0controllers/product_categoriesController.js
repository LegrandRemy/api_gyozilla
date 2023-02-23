const db = require('../models/index')
const Product_category = db['Product_Categories']

exports.getAllProduct_categories = async (req, res) => {
  try {
    const product_categories = await Product_category.findAll()
    res.status(200).json(product_categories)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les catégories de produit',
      error: error.message,
    })
  }
}

exports.getProduct_category = async (req, res) => {
  try {
    const product_category = await Product_category.findByPk(req.params.id)
    res.status(200).json(product_category)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la catégorie de produit',
      error: error.message,
    })
  }
}

exports.createProduct_category = async (req, res) => {
  try {
    const newProduct_category = await Product_category.create(req.body)
    res.status(201).json({ message: 'created', data: newProduct_category })
  } catch (error) {
    res.status(500).json({
      message: "La catégorie de produit n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateProduct_category = async (req, res) => {
  try {
    const updatedProduct_category = await Product_category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedProduct_category })
  } catch (error) {
    res.status(500).json({
      message: "La catégorie de produit n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteProduct_category = async (req, res) => {
  try {
    await Product_category.findByPk(req.params.id)
    res.status(200).json({
      message: 'La catégorie de produit a été supprimée',
    })
  } catch (error) {
    res.status(500).json({
      message: "La catégorie de produit n'a pas été supprimée",
      error: error.message,
    })
  }
}
