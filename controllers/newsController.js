const db = require('../models/index')
const News = db['News']
const _ = require('lodash')
const { Op } = require('sequelize')


exports.getAllNews = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.name) {
      where.name = req.query.name
    }
    if (req.query.image) {
      where.image = req.query.image
    }
    if (req.query.description) {
      where.description = req.query.description
    }
    const news = await News.findAll({
      attributes: ['id', 'name', 'image', 'description', 'createdAt', 'updatedAt'],
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(news)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les actualités',
      error: error.message,
    })
  }
}

exports.getNew = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id, {
      attributes: ['id', 'name', 'image', 'description', 'createdAt', 'updatedAt'],
    })
    if (news) {
      res.status(200).json(news)
    } else {
      res.status(404).json({
        message: "Aucune actualité n'a été trouvée.",
      })
    }
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer l'actualité",
      error: error.message,
    })
  }
}

exports.createNew = async (req, res) => {
  try {
    const newsNews = await News.create(req.body)
    res.status(201).json({
      message: 'created',
      data: newsNews,
    })
  } catch (error) {
    res.status(500).json({
      message: "L'actualité n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateNew = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await News.describe()
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
    const oldNews = await News.findByPk(req.params.id, {
      attributes: ['id', 'name', 'image', 'description', 'createdAt', 'updatedAt'],
    })
    const updatedNews = await News.update(req.body, {
      attributes: ['id', 'name', 'image', 'description', 'createdAt', 'updatedAt'],
      where: {
        id: req.params.id,
      },
    })
    const newsNews = await News.findByPk(req.params.id, {
      attributes: ['id', 'name', 'image', 'description', 'createdAt', 'updatedAt'],
    })
    const updatedProperties = _.omitBy(newsNews.dataValues, (value, key) =>
      _.isEqual(value, oldNews.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])
    res.status(200).json({
      message: 'Mise à jour',
      data: response,
    })
  } catch (error) {
    res.status(500).json({
      message: "L'actualité n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteNew = async (req, res) => {
  try {
    await News.destroy({
      where: {
        id: req.params.id,o

      },
    })
    res.status(200).json({
      message: "L'actualité a été supprimée",
    })
  } catch (error) {
    res.status(500).json({
      message: "L'actualité n'a pas été supprimée",
      error: error.message,
    })
  }
}
