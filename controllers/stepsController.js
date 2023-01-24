const db = require('../models/index')
const Step = db['Steps']

exports.getAllSteps = async (req, res) => {
  try {
    const Steps = await Step.findAll()
    res.status(200).json(Steps)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les etapes du menu',
      error: error.message,
    })
  }
}

exports.getStep = async (req, res) => {
  try {
    const Step = await Step.findByPk(req.params.id)
    res.status(200).json(Step)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les etapes du menu',
      error: error.message,
    })
  }
}

exports.createStep = async (req, res) => {
  try {
    const newStep = await Step.create(req.body)
    res.status(201).json({ message: 'created', data: newStep })
  } catch (error) {
    res.status(500).json({
      message: "les etapes du menu n'ont pas été créées",
      error: error.message,
    })
  }
}

exports.updateStep = async (req, res) => {
  try {
    const updatedStep = await Step.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedStep })
  } catch (error) {
    res.status(500).json({
      message: "les etapes du menu n'ont pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteStep = async (req, res) => {
  try {
    await Step.findByPk(req.params.id)
    res.status(200).json({
      message: 'les etapes du menu ont été supprimées',
    })
  } catch (error) {
    res.status(500).json({
      message: "les etapes du menu n'ont pas été supprimées",
      error: error.message,
    })
  }
}
