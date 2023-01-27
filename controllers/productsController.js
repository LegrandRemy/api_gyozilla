const db = require('../models/index')
const Products = db['Products']
const _ = require('lodash')
const { Op } = require('sequelize')
const multer = require('multer')
const fs = require('fs')
const { storage } = require('../middlewares/upload')

exports.getAllProducts = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.label) {
      where.label = req.query.label
    }
    if (req.query.price) {
      where.price = req.query.price
    }
    if (req.query.reference) {
      where.reference = req.query.reference
    }
    const products = await Products.findAll({
      include: ['productCategory'],
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
    const product = await Products.findByPk(req.params.id, {
      include: ['productCategory'],
    })
    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404).json({
        message: "Aucun produit n'a été trouvé.",
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les produits',
      error: error.message,
    })
  }
}

exports.createProduct = async (req, res) => {
  try {
    const product_isExist = await Products.findOne({
      where: {
        reference: req.body.reference,
      },
    })
    if (product_isExist)
      return res.status(401).send({
        message: 'Le produit existe déjà',
      })
    const image = req.file
    const newProduct = await Products.create(req.body)
    const newFileName = newProduct.id
    fs.renameSync(image.path, 'uploads/products/' + newFileName)
    const productPatch = await Products.update(
      {
        image: newFileName,
      },
      {
        where: {
          id: newProduct.id,
        },
      },
    )
    res.status(200).json({
      message: 'Produit créé',
      data: newProduct,
      update: productPatch,
    })
  } catch (error) {
    res.status(500).json({
      message: "Le produit n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await Products.describe()
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
    const oldProduct = await Products.findByPk(req.params.id)
    const updatedProduct = await Products.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newProduct = await Products.findByPk(req.params.id)
    const updatedProperties = _.omitBy(newProduct.dataValues, (value, key) =>
      _.isEqual(value, oldProduct.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])
    res.status(200).json({ message: 'Mis à jour', data: response })
  } catch (error) {
    res.status(500).json({
      message: "Le produit n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    await Products.destroy({
      where: {
        id: req.params.id,
      },
    })
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
