const db = require('../models/index')
const SupplierOrder = db['SupplierOrders']
const _ = require('lodash')
const { Op } = require('sequelize')

exports.getAllSupplierOrders = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.date_order) {
      where.date_order = req.query.date_order
    }
    if (req.query.total_price) {
      where.total_price = req.query.total_price
    }
    if (req.query.id_suppliers) {
      where.id_suppliers = req.query.id_suppliers
    }
    if (req.query.id_franchises) {
      where.id_franchises = req.query.id_franchises
    }
    const supplierOrder = await SupplierOrder.findAll({
      where: {
        [Op.and]: [where],
      },
    })
    res.status(200).json(supplierOrder)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les commandes fournisseurs !',
      error: error.message,
    })
  }
}

exports.getSupplierOrder = async (req, res) => {
  try {
    const supplierOrder = await SupplierOrder.findByPk(req.params.id)
    res.status(200).json(supplierOrder)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la commande fournisseur !',
      error: error.message,
    })
  }
}

exports.createSupplierOrder = async (req, res) => {
  try {
    const newSupplierOrder = await SupplierOrder.create(req.body)
    res.status(201).json({ message: 'created', data: newSupplierOrder })
  } catch (error) {
    res.status(500).json({
      message: "La commande fournisseur n'a pas été créée !",
      error: error.message,
    })
  }
}

exports.updateSupplierOrder = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const columns = await SupplierOrder.describe()
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
    const oldSupplierOrder = await SupplierOrder.findByPk(req.params.id)
    const updatedSupplierOrder = await SupplierOrder.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const newSupplierOrder = await SupplierOrder.findByPk(req.params.id)
    const updatedProperties = _.omitBy(
      newSupplierOrder.dataValues,
      (value, key) => _.isEqual(value, oldSupplierOrder.dataValues[key]),
    )
    const response = _.omit(updatedProperties, ['updatedAt'])
    res.status(200).json({ message: 'Mis à jour', data: response })
  } catch (error) {
    res.status(500).json({
      message: "La commande fournisseur n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteSupplierOrder = async (req, res) => {
  try {
    await SupplierOrder.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json({
      message: 'La commande fournisseur a été supprimée !',
    })
  } catch (error) {
    res.status(500).json({
      message: "La commande fournisseur n'a pas été supprimée",
      error: error.message,
    })
  }
}
