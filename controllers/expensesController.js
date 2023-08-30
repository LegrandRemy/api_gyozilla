const { Op } = require('sequelize')
const db = require('../models/index')
const Expense = db['Expenses']
const _ = require('lodash')


exports.getAllExpenses = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.name) {
      where.name = req.query.name
    }
    if (req.query.id_expense_types) {
      where.id_expense_types = req.query.id_expense_types
    }
    if (req.query.amount) {
      where.amount = req.query.amount
    }
    const expenses = await Expense.findAll({
      where: {
        [Op.and]: [where],
      },
      include: ["expense_types"],
    })
    res.status(200).json(expenses)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les dépenses',
      error: error.message,
    })
  }
}

exports.getExpense = async (req, res) => {
  try {
    const order = await Expense.findByPk(req.params.id, {
      include: ['expense_types'],
    })
    res.status(200).json(order)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la dépense',
      error: error.message,
    })
  }
}

exports.getExpenseByExpenseType = async (req, res) => {
  const id = req.params.id
  try {
    const expenses = await Expense.findAll({
      where: { id_expense_types: id },
      include: ['expense_types']
    })
    res.status(200).json({
      message: 'getExpenseByExpenseType',
      data: expenses,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Impossible de récupérer les dépenses",
      error: error.message,
    })
  }
}

exports.createExpense = async (req, res) => {
  try {
    const newExpense = await Expense.create(req.body)
    res.status(201).json({ message: 'created', data: newExpense })
  } catch (error) {
    res.status(500).json({
      message: "La dépense n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateExpense = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await Expense.describe()
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
    const oldExpense = await Expense.findByPk(req.params.id)
    const updatedExpense = await Expense.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newExpense = await Expense.findByPk(req.params.id)
    const updatedProperties = _.omitBy(newExpense.dataValues, (value, key) =>
      _.isEqual(value, oldExpense.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])
    res.status(200).json({ message: 'Mis à jour', data: response })
  } catch (error) {
    res.status(500).json({
      message: "La dépense n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteExpense = async (req, res) => {
  try {
    await Expense.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: 'La dépense a été supprimée',
    })
  } catch (error) {
    res.status(500).json({
      message: "La dépense n'a pas été supprimée",
      error: error.message,
    })
  }
}
