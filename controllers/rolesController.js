const db = require('../models/index')
const Role = db['Roles']

exports.getAllRoles = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.name) {
      where.name = req.query.name
    }
    const role = await Role.findAll({
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(role)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les roles des employés',
      error: error.message,
    })
  }
}

exports.getRole = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id)
    res.status(200).json(role)
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer le role de l'employé",
      error: error.message,
    })
  }
}

exports.createRole = async (req, res) => {
  try {
    const newRole = await Role.create(req.body)
    res.status(201).json({ message: 'created', data: newRole })
  } catch (error) {
    res.status(500).json({
      message: "Le role de l'employé n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateRole = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await Role.describe()
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
    const oldRole = await Role.findByPk(req.params.id)
    const updatedRole = await Role.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newRole = await Role.findByPk(req.params.id)
    const updatedProperties = _.omitBy(newRole.dataValues, (value, key) =>
      _.isEqual(value, oldRole.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])
    res.status(200).json({ message: 'Mis à jour', data: response })
  } catch (error) {
    res.status(500).json({
      message: "Le role de l'employé n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteRole = async (req, res) => {
  try {
    await Role.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: "le role de l'employé a été supprimé",
    })
  } catch (error) {
    res.status(500).json({
      message: "le role de l'employé n'a pas été supprimé",
      error: error.message,
    })
  }
}
