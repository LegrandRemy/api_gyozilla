const db = require('../models/index')
const News = db['News']
const { Op } = require('sequelize')
const fs = require('fs')
const _ = require('lodash')

exports.getAllNews = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.title) {
      where.title = req.query.title
    }
    if (req.query.description) {
      where.description = req.query.description
    }
    if (req.query.image) {
      where.image = req.query.image
    }
    const news = await News.findAll({
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
    const nEw = await News.findByPk(req.params.id)
    if (nEw) {
      res.status(200).json(nEw)
    } else {
      res.status(404).json({
        message: "Aucune actualité n'a été trouvée.",
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les actualités',
      error: error.message,
    })
  }
}

exports.createNew = async (req, res) => {
  console.log(req.body)
  try {
    const new_isExist = await News.findOne({
      where: {
        reference: req.body.reference,
      },
    })
    if (new_isExist)
      return res.status(401).send({
        message: "L'actualité existe déjà",
      })
    const image = req.file
    const newNew = await News.create(req.body)
    const newFileName = newNew.id
    fs.renameSync(image.path, 'uploads/news/' + newFileName)
    const newPatch = await News.update(
      {
        image: newFileName,
      },
      {
        where: {
          id: newNew.id,
        },
      },
    )
    res.status(200).json({
      message: 'Actualité créée',
      data: newNew,
      update: newPatch,
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
    const oldNew = await News.findByPk(req.params.id)
    const updatedNew = await News.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newNew = await News.findByPk(req.params.id)
    const updatedNews = _.omitBy(newNew.dataValues, (value, key) =>
      _.isEqual(value, oldNew.dataValues[key]),
    )
    const response = _.omit(updatedNews, ['updatedAt'])
    res.status(200).json({ message: 'Mis à jour', data: response })
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
        id: req.params.id,
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
