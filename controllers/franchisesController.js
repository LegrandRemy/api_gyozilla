const db = require('../models/index')
const Franchises = db['Franchises']
const _ = require('lodash')
const { Op } = require('sequelize')

exports.is_exist = async (id) => {
  Franchises.findOne(
    {
      $where: [
        {
          id: id,
        },
      ],
    },
    (err, franchise) => {
      if (err) throw err
      if (franchise) {
        return true
      } else {
        return false
      }
    },
  )
}

exports.getAllFranchises = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.name) {
      where.name = req.query.name
    }
    if (req.query.address) {
      where.address = req.query.address
    }
    if (req.query.phone) {
      where.phone = req.query.phone
    }
    const franchises = await Franchises.findAll({
      attributes: ['id', 'name', 'address', 'phone', 'createdAt', 'updatedAt'],
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(franchises)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les franchises',
      error: error.message,
    })
  }
}

exports.getFranchise = async (req, res) => {
  try {
    const franchise = await Franchises.findByPk(req.params.id, {
      attributes: ['id', 'name', 'address', 'phone', 'createdAt', 'updatedAt'],
    })
    if (franchise) {
      res.status(200).json(franchise)
    } else {
      res.status(404).json({
        message: "Aucune franchise n'a été trouvée.",
      })
    }
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer la franchise'",
      error: error.message,
    })
  }
}

exports.createFranchise = async (req, res) => {
  try {
    const newFranchise = await Franchises.create(req.body)
    res.status(201).json({
      message: 'created',
      data: newFranchise,
    })
  } catch (error) {
    res.status(500).json({
      message: "La franchise n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateFranchise = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await Franchises.describe()
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
    const oldFranchise = await Franchises.findByPk(req.params.id)
    const updatedFranchise = await Franchises.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newFranchise = await Franchises.findByPk(req.params.id)
    const updatedProperties = _.omitBy(newFranchise.dataValues, (value, key) =>
      _.isEqual(value, oldFranchise.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])
    res.status(200).json({
      message: 'Mise à jour',
      data: response,
    })
  } catch (error) {
    res.status(500).json({
      message: "La franchise' n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteFranchise = async (req, res) => {
  try {
    await Franchises.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: 'La franchise a été supprimée',
    })
  } catch (error) {
    res.status(500).json({
      message: "La franchise n'a pas été supprimée",
      error: error.message,
    })
  }
}
