const db = require('../models/index')
const Employees = db['Employees']
const bcrypt = require('bcryptjs')
const _ = require('lodash')
const { Op } = require('sequelize')
const { generateRandomNumber } = require('../middlewares/generateRandom')

exports.is_exist = async (id) => {
  Employees.findOne(
    {
      $where: [
        {
          id: id,
        },
      ],
    },
    (err, employee) => {
      if (err) throw err
      if (employee) {
        return true
      } else {
        return false
      }
    },
  )
}

exports.getAllEmployees = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.lastname) {
      where.lastname = req.query.lastname
    }
    if (req.query.firstname) {
      where.firstname = req.query.firstname
    }
    if (req.query.phone) {
      where.phone = req.query.phone
    }
    if (req.query.email) {
      where.email = req.query.email
    }
    if (req.query.password) {
      where.password = req.query.password
    }
    if (req.query.id_franchises) {
      where.id_franchises = req.query.id_franchises
    }
    if (req.query.id_roles) {
      where.roles = req.query.roles
    }
    const employees = await Employees.findAll({
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(employees)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les employés',
      error: error.message,
    })
  }
}

exports.getEmployee = async (req, res) => {
  try {
    const employee = await Employees.findByPk(req.params.id)
    if (employee) {
      res.status(200).json(employee)
    } else {
      res.status(404).json({
        message: "Aucun employé n'a été trouvé.",
      })
    }
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer l'employé'",
      error: error.message,
    })
  }
}

exports.createEmployee = async (req, res) => {
  try {
    const lastname = req.body.lastname
    const firstname = req.body.firstname
    const login = lastname.slice(0,2) + firstname.slice(0,2) + generateRandomNumber().toString
    Employees.beforeCreate(async (employee, options) => {
      const hashedPassword = await bcrypt.hash(employee.password, 10);
      employee.password = hashedPassword;
    });
    const newEmployee = await Employees.create(req.body, {
      login: login
    })
    res.status(201).json({
      message: 'created',
      data: newEmployee,
    })
  } catch (error) {
    res.status(500).json({
      message: "L'employé n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateEmployee = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await Employees.describe()
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
    const oldEmployee = await Employees.findByPk(req.params.id)
    const updatedEmployee = await Employees.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newEmployee = await Employees.findByPk(req.params.id)
    const updatedProperties = _.omitBy(newEmployee.dataValues, (value, key) =>
      _.isEqual(value, oldEmployee.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])
    res.status(200).json({
      message: 'Mis à jour',
      data: response,
    })
  } catch (error) {
    res.status(500).json({
      message: "L'employé' n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteEmployee = async (req, res) => {
  try {
    await Employees.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: "L'employé a été supprimé",
    })
  } catch (error) {
    res.status(500).json({
      message: "L'employé n'a pas été supprimé",
      error: error.message,
    })
  }
}
