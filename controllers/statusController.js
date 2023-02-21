const { Op } = require('sequelize');
const db = require('../models/index');
const Order = db['Status'];


exports.getAllStatus = async (req, res) => {
  try {
    const where = {}
    if (req.query.id) {
      where.id = req.query.id
    }
    if (req.query.name) {
      where.name = req.query.name
    }
    const status = await Status.findAll({
      attributes: [
        'id',
        'name',
      ],
      where: {
        [Op.and]: [where],
      },
    });
    res.status(200).json(status)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les status',
      error: error.message,
    })
  }
}

exports.getStatus = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id)
    res.status(200).json(status)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer le status',
      error: error.message,
    })
  }
}

exports.createStatus = async (req, res) => {
  try {
    const newStatus = await Status.create(req.body)
    res.status(201).json({ message: 'created', data: newStatus })
  } catch (error) {
    res.status(500).json({
      message: "Le status n'a pas été créée",
      error: error.message,
    })
  }
}

exports.updateStatus = async (req, res) => {
  try {
    const updatedStatus = await Status.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedStatus })
  } catch (error) {
    res.status(500).json({
      message: "Le status n'a pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteStatus = async (req, res) => {
  try {
    await Status.findByPk(req.params.id)
    res.status(200).json({
      message: 'Le status a été supprimée',
    })
  } catch (error) {
    res.status(500).json({
      message: "Le status n'a pas été supprimée",
      error: error.message,
    })
  }
}
