const db = require('../models/index')
const Step = db['Steps']

exports.getStep = async (req, res) => {
  try {
    const step = await Step.findByPk(req.params.id)
    if (step) {
      res.status(200).json(step)
    } else {
      res.status(404).json({
        message: "Aucune étape n'a été trouvé.",
      })
    }
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
    res.status(201).json({ 
      message: 'created', 
      data: newStep,
    })
  } catch (error) {
    res.status(500).json({
      message: "les etapes du menu n'ont pas été créées",
      error: error.message,
    })
  }
}

exports.deleteStep = async (req, res) => {
  try {
    await Step.destroy({
      where: {
        id: req.params.id,
      },
    })
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