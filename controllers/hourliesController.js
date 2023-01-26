const db = require('../models/index')
const Hourlies = db['Hourlies']

exports.getAllHourlies = async (req, res) => {
  try {
    const hourlies = await Hourlies.findAll()
    res.status(200).json(hourlies)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les plages horaires',
      error: error.message,
    })
  }
}

exports.getOrder = async (req, res) => {
  try {
    const hourlies = await Hourlies.findByPk(req.params.id)
    res.status(200).json(hourlies)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la plage horaire',
      error: error.message,
    })
  }
}

exports.createHourlies = async (req, res) => {
  try {
    const newHourlies = await Hourlies.create(req.body)
    res.status(201).json({ message: 'created', data: newHourlies })
  } catch (error) {
    res.status(500).json({
      message: "La plage horaire n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateHourlies = async (req, res) => {
  try {
    const updatedHourlies = await Hourlies.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedHourlies })
  } catch (error) {
    res.status(500).json({
      message: "La plage horaire n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteHourlies = async (req, res) => {
  try {
    await Hourlies.findByPk(req.params.id)
    res.status(200).json({
      message: 'La plage horaire a été supprimée',
    })
  } catch (error) {
    res.status(500).json({
      message: "La plage horaire n'a pas été supprimée",
      error: error.message,
    })
  }
}
