const db = require('../models/index')
const Meeting = db['Meetings']

// exports.is_exist = async (email) => {
//   User.findOne(
//     {
//       $or: [{ email: email }],
//     },
//     (err, user) => {
//       if (err) throw err
//       if (user) {
//         return true
//       } else {
//         return false
//       }
//     },
//   )
// }

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
  try {
    const newMeeting = await Meeting.create(req.body)
    res.status(201).json({ message: 'created', data: newMeeting })
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
