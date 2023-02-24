const db = require('../models/index')
const Rating = db['Ratings']

exports.getAllRatings = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.note) {
      where.note = req.query.note
    }
    if (req.query.comment) {
      where.comment = req.query.comment
    }
    const rating = await Rating.findAll({
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(rating)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les évaluations des clients',
      error: error.message,
    })
  }
}

exports.getRating = async (req, res) => {
  try {
    const rating = await Rating.findByPk(req.params.id)
    res.status(200).json(rating)
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer l'évaluation d'un client",
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
      message: "L'évaluation du client n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateRating = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await Rating.describe()
    const invalidFields = []
    for (let i = 0; i < keys.length; i++) {
      if (!columns.hasOwnProperty(keys[i])) {
        invalidFields.push(keys[i])
      }
    }
    if (invalidFields.length) {
      return res.status(400).json({
        message: `Le ou les champs qui n'existent pas : ${invalidFields.join(
          ', ',
        )}`,
      })
    }
    const oldRating = await Rating.findByPk(req.params.id)
    const updatedRating = await Rating.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newRating = await Rating.findByPk(req.params.id)
    const updatedProperties = _.omitBy(newRating.dataValues, (value, key) =>
      _.isEqual(value, oldRating.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])
    res.status(200).json({ message: 'Mis à jour', data: response })
  } catch (error) {
    res.status(500).json({
      message: "L'évaluation du client n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteRating = async (req, res) => {
  try {
    await Rating.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: "L'évaluation du client a été supprimé",
    })
  } catch (error) {
    res.status(500).json({
      message: "L'évaluation du client n'a pas été supprimé",
      error: error.message,
    })
  }
}
