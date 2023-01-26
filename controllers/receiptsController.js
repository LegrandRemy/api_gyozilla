const db = require('../models/index')
const Receipt = db['Receipts']

exports.getAllReceipts = async (req, res) => {
  try {
    const Receipts = await Receipt.findAll()
    res.status(200).json(Receipts)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les utilisateurs',
      error: error.message,
    })
  }
}

exports.getReceipt = async (req, res) => {
  try {
    const Receipt = await Receipt.findByPk(req.params.id)
    res.status(200).json(Receipt)
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer l'utilisateur",
      error: error.message,
    })
  }
}

exports.createReceipt = async (req, res) => {
  try {
    const newReceipt = await Receipt.create(req.body)
    res.status(201).json({ message: 'created', data: newReceipt })
  } catch (error) {
    res.status(500).json({
      message: "L'utilisateur n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateReceipt = async (req, res) => {
  try {
    const updatedReceipt = await Receipt.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedReceipt })
  } catch (error) {
    res.status(500).json({
      message: "L'utilisateur n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteReceipt = async (req, res) => {
  try {
    await Receipt.findByPk(req.params.id)
    res.status(200).json({
      message: "L'utilisateur a été supprimé",
    })
  } catch (error) {
    res.status(500).json({
      message: "L'utilisateur n'a pas été supprimé",
      error: error.message,
    })
  }
}
