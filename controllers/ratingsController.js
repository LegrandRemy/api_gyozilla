const db = require('../models/index')
const Rating = db['Ratings']

exports.getAllRatings = async (req, res) => {
  try {
    const Ratings = await Rating.findAll()
    res.status(200).json(Ratings)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les evaluations des produits',
      error: error.message,
    })
  }
}

exports.getRating = async (req, res) => {
  try {
    const Rating = await Rating.findByPk(req.params.id)
    res.status(200).json(Rating)
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer l'evaluation",
      error: error.message,
    })
  }
}

exports.createRating = async (req, res) => {
  try {
    const newRating = await Rating.create(req.body)
    res.status(201).json({ message: 'created', data: newRating })
  } catch (error) {
    res.status(500).json({
      message: "L'evaluation n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateRating = async (req, res) => {
  try {
    const updatedRating = await Rating.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedRating })
  } catch (error) {
    res.status(500).json({
      message: "L'evaluation n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteRating = async (req, res) => {
  try {
    await Rating.findByPk(req.params.id)
    res.status(200).json({
      message: "L'evaluation a été supprimé",
    })
  } catch (error) {
    res.status(500).json({
      message: "L'evaluation n'a pas été supprimé",
      error: error.message,
    })
  }
}
