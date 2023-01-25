const db = require('../models/index')
const Ressource_type = db['Ressource_types']

exports.getAllRessources_types = async (req, res) => {
  try {
    const Ressources_types = await Ressource_type.findAll()
    res.status(200).json(Ressources_types)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les Ressource_types',
      error: error.message,
    })
  }
}

exports.getRessource_type = async (req, res) => {
  try {
    const Ressource_type = await Ressource_type.findByPk(req.params.id)
    res.status(200).json(Ressource_type)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la Ressource_type',
      error: error.message,
    })
  }
}

exports.createRessource_type = async (req, res) => {
  try {
    const newRessource_type = await Ressource_type.create(req.body)
    res.status(201).json({ message: 'created', data: newRessource_type })
  } catch (error) {
    res.status(500).json({
      message: "La Ressource_type n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateRessource_type = async (req, res) => {
  try {
    const updatedRessource_type = await Ressource_type.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedRessource_type })
  } catch (error) {
    res.status(500).json({
      message: "La Ressource_type n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteRessource_type = async (req, res) => {
  try {
    await Ressource_type.findByPk(req.params.id)
    res.status(200).json({
      message: 'La Ressource_type a été supprimé',
    })
  } catch (error) {
    res.status(500).json({
      message: "La Ressource_type n'a pas été supprimé",
      error: error.message,
    })
  }
}
