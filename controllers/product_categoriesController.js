const db = require('../models/index')
const ProductsCategories = db['ProductCategories']
const { Op } = require('sequelize')
const fs = require('fs')
const _ = require('lodash')

exports.getAllProductsCategories = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.name) {
      where.name = req.query.name
    }
    const productsCategories = await ProductsCategories.findAll({
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(productsCategories)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les categories produits',
      error: error.message,
    })
  }
}

exports.getProduct = async (req, res) => {
  try {
    const product = await ProductsCategories.findByPk(req.params.id, {})
    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404).json({
        message: "Aucune categories n'a été trouvées.",
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les categories des produits',
      error: error.message,
    })
  }
}

exports.createProduct = async (req, res) => {
  try {
    const product_isExist = await ProductsCategories.findOne({
      where: {
        reference: req.body.reference,
      },
    })
    if (product_isExist)
      return res.status(401).send({
        message: 'La categorie existe déjà',
      })
    const image = req.file
    const newProduct = await ProductsCategories.create(req.body)
    const newFileName = newProduct.id
    fs.renameSync(image.path, 'uploads/productsCategories/' + newFileName)
    const productPatch = await ProductsCategories.update(
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
      message: 'Categorie créé',
      data: newProduct,
      update: productPatch,
    })
  } catch (error) {
    res.status(500).json({
      message: "La categorie n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await ProductsCategories.describe()
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
    const oldProduct = await ProductsCategories.findByPk(req.params.id)
    const updatedProduct = await ProductsCategories.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newProduct = await ProductsCategories.findByPk(req.params.id)
    const updatedProperties = _.omitBy(newProduct.dataValues, (value, key) =>
      _.isEqual(value, oldProduct.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])
    res.status(200).json({ message: 'Mis à jour', data: response })
  } catch (error) {
    res.status(500).json({
      message: "La categorie n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    await ProductsCategories.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: 'La categorie a été supprimée',
    })
  } catch (error) {
    res.status(500).json({
      message: "La categorie n'a pas été supprimée",
      error: error.message,
    })
  }
}
