const db = require('../models/index');
const Product = db['Products'];
const { Op } = require('sequelize');

exports.getAllProducts = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.working) {
      where.working = req.query.working
    }
    if (req.query.price) {
      where.price = req.query.price
    }
    if (req.query.reference) {
      where.reference = req.query.reference
    }
    if (req.query.id_receipts) {
      where.id_receipts = req.query.id_receipts
    }
    const products = await Product.findAll({
      attributes: [
        'id',
        'working',
        'price',
        'reference',
        'id_receipts'
      ],
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les produits',
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
      message: 'Impossible de récupérer les produits',
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
      message: "Le produit n'a pas été créé",
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
      message: "Le produit n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByPk(req.params.id)
    res.status(200).json({
      message: 'Le produit a été supprimé',
    })
  } catch (error) {
    res.status(500).json({
      message: "Le produit n'a pas été supprimé",
      error: error.message,
    })
  }
}
