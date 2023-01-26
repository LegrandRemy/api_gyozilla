const db = require('../models/index')
const Hourly_type = db['Hourly_types']

exports.getAllHourly_types = async (req, res) => {
  try {
    const hourly_types = await Hourly_type.findAll()
    res.status(200).json(hourly_types)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les taux horaires',
      error: error.message,
    })
  }
}

exports.getHourly_type = async (req, res) => {
  try {
    const hourly_type = await Hourly_type.findByPk(req.params.id)
    res.status(200).json(hourly_type)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer le taux horaire',
      error: error.message,
    })
  }
}

exports.createHourly_type = async (req, res) => {
  try {
    const newHourly_type = await Hourly_type.create(req.body)
    res.status(201).json({ message: 'created', data: newHourly_type })
  } catch (error) {
    res.status(500).json({
      message: "Le taux horaire n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateHourly_type = async (req, res) => {
  try {
    const updatedHourly_type = await Hourly_type.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedHourly_type })
  } catch (error) {
    res.status(500).json({
      message: "Le taux horaire n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteHourly_type = async (req, res) => {
  try {
    await Hourly_type.findByPk(req.params.id)
    res.status(200).json({
      message: 'Le taux horaire a été supprimé',
    })
  } catch (error) {
    res.status(500).json({
      message: "Le taux horaire n'a pas été supprimé",
      error: error.message,
    })
  }
}
