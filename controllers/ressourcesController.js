const db = require('../models/index')
const Ressources = db['Ressources']
const Ressources_suppliers = db['Ressources_suppliers']
const _ = require('lodash')
const { Op } = require('sequelize')

exports.getAllRessources = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.label) {
      where.label = req.query.label
    }
    if (req.query.price) {
      where.price = req.query.price
    }
    if (req.query.reference) {
      where.reference = req.query.reference
    }
    if (req.query.ressources_types) {
      where.ressources_types = req.query.ressources_types
    }
    const ressources = await Ressources.findAll({
      include: ['ressources_types', 'measurement_units'],
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(ressources)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les ressources',
      error: error.message,
    })
  }
}

exports.getRessourceByType = async (req,res) => {
  const idType = req.params.idType;
  try {
    const ressource = await Ressources.findAll({
          where: { id_ressources_types: idType },
    })
    res.status(200).json({
      message: 'RessourceByType',
      data: ressource
    })
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupèrer les ressources par son type',
      error: error.message,
    })
  }
}

exports.getResourcesBySupplier = async (req, res, next) => {
  try {
    const supplierId = req.params.supplierId;

    const ressources = await Ressources.findAll({
      include: [
        {
          model: Ressources_suppliers,
          where: { id_suppliers: supplierId },
          attributes: [],
        },
      ],
    });

    res.status(200).json(ressources);
  } catch (error) {
    res.status(500).json({ 
      message: 'Une erreur est survenue.',
      error: error.message });
  }
};


exports.getRessource = async (req, res) => {
  try {
    const ressources = await Ressources.findByPk(req.params.id, {
      include: ['ressources_types', 'measurement_units'],
    })
    res.status(200).json(ressources)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la ressource',
      error: error.message,
    })
  }
}

exports.createRessource = async (req, res) => {
  try {
    const newRessource = await Ressources.create(req.body)
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
    const keys = Object.keys(req.body)
    const columns = await Ressources.describe()
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
    const oldRessource = await Ressources.findByPk(req.params.id)
    const updatedRessource = await Ressources.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newRessource = await Ressources.findByPk(req.params.id)
    const updatedProperties = _.omitBy(newRessource.dataValues, (value, key) =>
      _.isEqual(value, oldRessource.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])

    res.status(201).json({ message: 'updated', data: response })
  } catch (error) {
    res.status(500).json({
      message: "La ressource n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteRessource = async (req, res) => {
  try {
    await Ressources.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: 'La ressource a été supprimé',
    })
  } catch (error) {
    res.status(500).json({
      message: "La ressource n'a pas été supprimé",
      error: error.message,
    })
  }
}
