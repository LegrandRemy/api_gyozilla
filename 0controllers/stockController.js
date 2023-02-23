const db = require('../models/index')
const Stock = db['Stock']
const Stocks_suppliers = db['Stocks_suppliers']
const _ = require('lodash')
const { Op } = require('sequelize')

exports.getAllStocks = async (req, res) => {
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
    if (req.query.stock_types) {
      where.stock_types = req.query.stock_types
    }
    const stock = await Stock.findAll({
      include: ['stock_types', 'measurement_units'],
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(stock)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les stock',
      error: error.message,
    })
  }
}

exports.getStockByType = async (req, res) => {
  const idType = req.params.idType
  try {
    const stock = await Stock.findAll({
      where: { id_stock_types: idType },
    })
    res.status(200).json({
      message: 'StockByType',
      data: stock,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupèrer les stock par son type',
      error: error.message,
    })
  }
}

exports.getStockBySupplier = async (req, res, next) => {
  try {
    const supplierId = req.params.supplierId

    const stock = await Stock.findAll({
      include: [
        {
          model: Stocks_suppliers,
          where: { id_suppliers: supplierId },
          attributes: [],
        },
      ],
    })

    res.status(200).json(stock)
  } catch (error) {
    res.status(500).json({
      message: 'Une erreur est survenue.',
      error: error.message,
    })
  }
}

exports.getStock = async (req, res) => {
  try {
    const stock = await Stock.findByPk(req.params.id, {
      include: ['stock_types', 'measurement_units'],
    })
    res.status(200).json(stock)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la stock',
      error: error.message,
    })
  }
}

exports.createStock = async (req, res) => {
  try {
    const newStock = await Stock.create(req.body)
    res.status(201).json({ message: 'created', data: newStock })
  } catch (error) {
    res.status(500).json({
      message: "La stock n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateStock = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await Stock.describe()
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
    const oldStock = await Stock.findByPk(req.params.id)
    const updatedStock = await Stock.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newStock = await Stock.findByPk(req.params.id)
    const updatedProperties = _.omitBy(newStock.dataValues, (value, key) =>
      _.isEqual(value, oldStock.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])

    res.status(201).json({ message: 'updated', data: response })
  } catch (error) {
    res.status(500).json({
      message: "La stock n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteStock = async (req, res) => {
  try {
    await Stock.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: 'La stock a été supprimé',
    })
  } catch (error) {
    res.status(500).json({
      message: "La stock n'a pas été supprimé",
      error: error.message,
    })
  }
}
