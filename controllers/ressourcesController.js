const db = require('../models/index')
const Ressource = db['Ressources']


exports.getAllRessources = async (req, res) => {
  try {
    const Ressources = await Ressource.findAll()
    res.status(200).json(Ressources)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les ressources',
      error: error.message,
    })
  }
}

exports.getRessource = async (req, res) => {
  try {
    const Ressource = await Ressource.findByPk(req.params.id)
    res.status(200).json(Ressource)
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer la ressource",
      error: error.message,
    })
  }
}

exports.createRessource = async (req, res) => {
  try {
    const newRessource = await Ressource.create(req.body)
    res.status(201).json({ message: 'created', data: newRessource })
  } catch (error) {
    res.status(500).json({
      message: "La ressource n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateRessource = async (req, res) => {
  try {
    const updatedRessource = await Ressource.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedRessource })
  } catch (error) {
    res.status(500).json({
      message: "La ressource n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteRessource = async (req, res) => {
  try {
    await Ressource.findByPk(req.params.id)
    res.status(200).json({
      message: "La ressource a été supprimé",
    })
  } catch (error) {
    res.status(500).json({
      message: "La ressource n'a pas été supprimé",
      error: error.message,
    })
  }
}