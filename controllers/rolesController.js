const db = require('../models/index')
const Role = db['Roles']

exports.getAllRoles = async (req, res) => {
  try {
    const Roles = await Role.findAll()
    res.status(200).json(Roles)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les Roles du user',
      error: error.message,
    })
  }
}

exports.getRole = async (req, res) => {
  try {
    const Role = await Role.findByPk(req.params.id)
    res.status(200).json(Role)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les Roles du user',
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
      message: "les Roles du user n'ont pas été créées",
      error: error.message,
    })
  }
}

exports.updateRole = async (req, res) => {
  try {
    const updatedRole = await Role.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedRole })
  } catch (error) {
    res.status(500).json({
      message: "les Roles du user n'ont pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteRole = async (req, res) => {
  try {
    await Role.findByPk(req.params.id)
    res.status(200).json({
      message: 'les Roles du user ont été supprimées',
    })
  } catch (error) {
    res.status(500).json({
      message: "les Roles du user n'ont pas été supprimées",
      error: error.message,
    })
  }
}
