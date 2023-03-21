const db = require('../models/index')
const Stock = db['Stocks']
// const Franchise = db['Franchises']
const _ = require('lodash')
const { Op } = require('sequelize')

exports.getAllStocks = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.id_franchise) {
      where.id_franchise = req.query.id_franchise
    }
    if (req.query.id_ingredients) {
      where.id_ingredients = req.query.id_ingredients
    }
    if (req.query.quantity) {
      where.quantity = req.query.quantity
    }
    const stocks = await Stock.findAll({
      // include: ['franchise', 'ingredients'],
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(stocks)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les stocks',
      error: error.message,
    })
  }
}

exports.getStockByIdIngredients = async (req, res, next) => {
  try {
    const ingredientId = req.params.ingredientId

    const stock = await Stock.findAll({
      where: { id_ingredients: ingredientId },
      include: [
        {
          model: Franchise,
          as: 'franchises',
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

exports.getStockByFranchise = async (req, res, next) => {
  try {
    const franchiseId = req.params.franchiseId

    const stock = await db.Stocks.findAll({
      where: { id_franchise: franchiseId },
      include: [
        {
          model: Ingredient,
          as: 'ingredients',
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
    const stock = await Stock.findByPk(
      req.params.id,
      //   , {
      //   include: [
      //     { model: db.Franchise, as: 'franchise' },
      //     { model: db.Ingredient, as: 'ingredient' },
      //   ],
      // }
    )
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
