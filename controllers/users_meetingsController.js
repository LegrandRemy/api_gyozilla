const db = require('../models/index')
const Users_meeting = db['Users_Meetings']

exports.getAllUsers_meetings = async (req, res) => {
  try {
    const Users_meetings = await Users_meeting.findAll()
    res.status(200).json(Users_meetings)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les reunions',
      error: error.message,
    })
  }
}

exports.getUsers_meeting = async (req, res) => {
  try {
    const Users_meeting = await Users_meeting.findByPk(req.params.id)
    res.status(200).json(Users_meeting)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la reunion',
      error: error.message,
    })
  }
}

exports.createUsers_meeting = async (req, res) => {
  try {
    const newUsers_meeting = await Users_meeting.create(req.body)
    res.status(201).json({ message: 'created', data: newUsers_meeting })
  } catch (error) {
    res.status(500).json({
      message: "la reunion n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateUsers_meeting = async (req, res) => {
  try {
    const updatedUsers_meeting = await Users_meeting.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedUsers_meeting })
  } catch (error) {
    res.status(500).json({
      message: "la reunion n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteUsers_meeting = async (req, res) => {
  try {
    await Users_meeting.findByPk(req.params.id)
    res.status(200).json({
      message: 'la reunion a été supprimé',
    })
  } catch (error) {
    res.status(500).json({
      message: "la reunion n'a pas été supprimé",
      error: error.message,
    })
  }
}
