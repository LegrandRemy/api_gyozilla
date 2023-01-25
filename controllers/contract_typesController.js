const db = require('../models/index')
const Contract_type = db['Contract_types']

exports.getAllContract_types = async (req, res) => {
  try {
    const contract_types = await Contract_type.findAll()
    res.status(200).json(contract_types)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les types de contrats',
      error: error.message,
    })
  }
}

exports.getContract_type = async (req, res) => {
  try {
    const contract_type = await Contract_type.findByPk(req.params.id)
    res.status(200).json(contract_type)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer le type de contrat',
      error: error.message,
    })
  }
}

exports.createContract_type = async (req, res) => {
  try {
    const newContract_type = await Contract_type.create(req.body)
    res.status(201).json({ message: 'created', data: newContract_type })
  } catch (error) {
    res.status(500).json({
      message: "Le type de contrat n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateContract_type = async (req, res) => {
  try {
    const updatedContract_type = await Contract_type.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedContract_type })
  } catch (error) {
    res.status(500).json({
      message: "Le type de contrat n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteContract_type = async (req, res) => {
  try {
    await Contract_type.findByPk(req.params.id)
    res.status(200).json({
      message: 'Le type de contrat a été supprimé',
    })
  } catch (error) {
    res.status(500).json({
      message: "Le type de contrat n'a pas été supprimé",
      error: error.message,
    })
  }
}
