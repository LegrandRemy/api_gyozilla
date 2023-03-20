const { Op } = require('sequelize')
const db = require('../models/index')
const Status = db['Status']
const _ = require('lodash')

exports.getAllStatus = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.note) {
      where.note = req.query.note
    }
    if (req.query.comment) {
      where.comment = req.query.comment
    }
    const status = await Status.findAll({
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(status)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les status',
      error: error.message,
    })
  }
}

exports.getStatus = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id)
    res.status(200).json(status)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer le status',
      error: error.message,
    })
  }
}

exports.createStatus = async (req, res) => {
  try {
    const newStatus = await Status.create(req.body)
    res.status(201).json({ message: 'created', data: newStatus })
  } catch (error) {
    res.status(500).json({
      message: "Le status n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateStatus = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await Status.describe()
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
    const oldStatus = await Status.findByPk(req.params.id)
    const updatedStatus = await Status.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newStatus = await Status.findByPk(req.params.id)
    const updatedProperties = _.omitBy(newStatus.dataValues, (value, key) =>
      _.isEqual(value, oldStatus.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])
    res.status(200).json({ message: 'Mis à jour', data: response })
  } catch (error) {
    res.status(500).json({
      message: "Le status n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteStatus = async (req, res) => {
  try {
    await Status.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: 'Le status a été supprimée',
    })
  } catch (error) {
    res.status(500).json({
      message: "Le status n'a pas été supprimé",
      error: error.message,
    })
  }
}
