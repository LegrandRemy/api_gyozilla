const { Op } = require('sequelize')
const db = require('../models/index')
const Ingredient = db['Ingredients']

exports.getAllIngredients = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.name) {
      where.name = req.query.name
    }
    if (req.query.quantity) {
      where.quantity = req.query.quantity
    }
    if (req.query.purchasePrice) {
      where.purchasePrice = req.query.purchasePrice
    }
    const ingredient = await Ingredient.findAll({
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(ingredient)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les ingredients',
      error: error.message,
    })
  }
}

exports.getIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findByPk(req.params.id)
    res.status(200).json(ingredient)
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer l'ingrédient",
      error: error.message,
    })
  }
}

exports.createIngredient = async (req, res) => {
  try {
    const newIngredient = await Ingredient.create(req.body)
    res.status(201).json({ message: 'created', data: newIngredient })
  } catch (error) {
    res.status(500).json({
      message: "L'ingrédient n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateIngredient = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await Ingredient.describe()
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
    const oldIngredient = await Ingredient.findByPk(req.params.id)
    const updatedIngredient = await Ingredient.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newIngredient = await Ingredient.findByPk(req.params.id)
    const updatedProperties = _.omitBy(newIngredient.dataValues, (value, key) =>
      _.isEqual(value, oldIngredient.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])
    res.status(200).json({ message: 'Mis à jour', data: response })
  } catch (error) {
    res.status(500).json({
      message: "L'ingrédient n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteIngredient = async (req, res) => {
  try {
    await Ingredient.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: "L'ingrédient a été supprimé",
    })
  } catch (error) {
    res.status(500).json({
      message: "L'ingrédient n'a pas été supprimé",
      error: error.message,
    })
  }
}
