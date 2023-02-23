const db = require('../models/index')
const Users = db['Users']
const _ = require('lodash')
const { Op } = require('sequelize')

exports.is_exist = async (email) => {
  Users.findOne(
    {
      $where: [
        {
          email: email,
        },
      ],
    },
    (err, user) => {
      if (err) throw err
      if (user) {
        return true
      } else {
        return false
      }
    },
  )
}

exports.getAllUsers = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.firstname) {
      where.firstname = req.query.firstname
    }
    if (req.query.lastname) {
      where.lastname = req.query.lastname
    }
    if (req.query.email) {
      where.email = req.query.email
    }
    if (req.query.phone) {
      where.phone = req.query.phone
    }
    if (req.query.address) {
      where.address = req.query.address
    }
    if (req.query.zipcode) {
      where.zipcode = req.query.zipcode
    }
    if (req.query.city) {
      where.city = req.query.city
    }
    if (req.query.hiring_date) {
      where.hiring_date = req.query.hiring_date
    }
    if (req.query.salary) {
      where.salary = req.query.salary
    }
    if (req.query.fidelitypoints) {
      where.fidelitypoints = req.query.fidelitypoints
    }
    if (req.query.roles) {
      where.roles = req.query.roles
    }
    const users = await Users.findAll({
      include: ['roles', 'meetingsUsers'],
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les utilisateurs',
      error: error.message,
    })
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id, {
      include: ['roles', 'contract_types', 'meetingsUsers'],
    })
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({
        message: "Aucun utilisateur n'a été trouvé.",
      })
    }
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer l'utilisateur",
      error: error.message,
    })
  }
}

exports.createUser = async (req, res) => {
  try {
    const newUser = await Users.create(req.body)
    res.status(201).json({
      message: 'created',
      data: newUser,
    })
  } catch (error) {
    res.status(500).json({
      message: "L'utilisateur n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateUser = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await Users.describe()
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
    const oldUser = await Users.findByPk(req.params.id)
    const updatedUser = await Users.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newUser = await Users.findByPk(req.params.id)
    const updatedProperties = _.omitBy(newUser.dataValues, (value, key) =>
      _.isEqual(value, oldUser.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])
    res.status(200).json({ message: 'Mis à jour', data: response })
  } catch (error) {
    res.status(500).json({
      message: "L'utilisateur n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    await Users.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: "L'utilisateur a été supprimé",
    })
  } catch (error) {
    res.status(500).json({
      message: "L'utilisateur n'a pas été supprimé",
      error: error.message,
    })
  }
}
