const db = require('../models/index')
const Stock_type = db['Stock_Types']

exports.getAllStocks_types = async (req, res) => {
  try {
    const Stocks_types = await Stock_type.findAll()
    res.status(200).json(Stocks_types)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les Stock_types',
      error: error.message,
    })
  }
}

exports.getStock_type = async (req, res) => {
  try {
    const Stock_type = await Stock_type.findByPk(req.params.id)
    res.status(200).json(Stock_type)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la Stock_type',
      error: error.message,
    })
  }
}

exports.createStock_type = async (req, res) => {
  try {
    const newStock_type = await Stock_type.create(req.body)
    res.status(201).json({ message: 'created', data: newStock_type })
  } catch (error) {
    res.status(500).json({
      message: "La Stock_type n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateStock_type = async (req, res) => {
  try {
    const updatedStock_type = await Stock_type.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedStock_type })
  } catch (error) {
    res.status(500).json({
      message: "La Stock_type n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteStock_type = async (req, res) => {
  try {
    await Stock_type.findByPk(req.params.id)
    res.status(200).json({
      message: 'La Stock_type a été supprimé',
    })
  } catch (error) {
    res.status(500).json({
      message: "La Stock_type n'a pas été supprimé",
      error: error.message,
    })
  }
}
