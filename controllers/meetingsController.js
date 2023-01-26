const db = require('../models/index')
const { getAllUsers_meetings } = require('./users_meetingsController')
const Meeting = db['Meetings']
const Users_meetings = db['Users_meetings']

exports.getAllMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.findAll()
    res.status(200).json(meetings)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les rendez-vous',
      error: error.message,
    })
  }
}

exports.getMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.findByPk(req.params.id)
    res.status(200).json(meeting)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer le rendez-vous',
      error: error.message,
    })
  }
}

exports.createMeeting = async (req, res) => {
  let data = {
    end_hour: req.body.end_hour,
    start_hour: req.body.start_hour,
  }
  try {
    const newMeeting = await Meeting.create(data)
    if (newMeeting) {
      req.body.id_users.map((item) => {
        Users_meetings.create({
          id_meetings: newMeeting.id,
          id_users: item,
        })
      })

      res.status(201).json({ message: 'created', data: newMeeting })
    }
  } catch (error) {
    res.status(500).json({
      message: "Le rendez-vous n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateMeeting = async (req, res) => {
  try {
    const updatedMeeting = await Meeting.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedMeeting })
  } catch (error) {
    res.status(500).json({
      message: "Le rendez-vous n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteMeeting = async (req, res) => {
  try {
    await Meeting.findByPk(req.params.id)
    res.status(200).json({
      message: 'Le rendez-vous a été supprimé',
    })
  } catch (error) {
    res.status(500).json({
      message: "Le rendez-vous n'a pas été supprimé",
      error: error.message,
    })
  }
}
