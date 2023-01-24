const db = require('../models/index')
const User = db['Users']

exports.is_exist = async (email) => {
  User.findOne(
    {
      $or: [{ email: email }],
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
    const users = await User.findAll()
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
    const user = await User.findByPk(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer l'utilisateur",
      error: error.message,
    })
  }
}

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).json({ message: 'created', data: newUser })
  } catch (error) {
    res.status(500).json({
      message: "L'utilisateur n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByPk(req.params.id, req.body, {
      new: true,
    })
    res.status(201).json({ message: 'updated', data: updatedUser })
  } catch (error) {
    res.status(500).json({
      message: "L'utilisateur n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    await User.findByPk(req.params.id)
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
