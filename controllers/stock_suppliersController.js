const db = require('../models/index')
const Stock_supplier = db['Stocks_suppliers']

exports.getAllStocks_suppliers = async (req, res) => {
  console.log('ici')
  try {
    const stock_suppliers = await Stock_supplier.findAll()

    res.status(200).json(stock_suppliers)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les Stock_suppliers',
      error: error.message,
    })
  }
}

exports.getStock_supplier = async (req, res) => {
  try {
    const Stock_supplier = await Stock_supplier.findByPk(req.params.id)
    res.status(200).json(Stock_supplier)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la Stock_supplier',
      error: error.message,
    })
  }
}

exports.createStock_supplier = async (req, res) => {
  try {
    const newStock_supplier = await Stock_supplier.create(req.body)
    res.status(201).json({ message: 'created', data: newStock_supplier })
  } catch (error) {
    res.status(500).json({
      message: "La Stock_supplier n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateStock_supplier = async (req, res) => {
  try {
    const updatedStock_supplier = await Stock_supplier.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedStock_supplier })
  } catch (error) {
    res.status(500).json({
      message: "La Stock_supplier n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteStock_supplier = async (req, res) => {
  try {
    await Stock_supplier.findByPk(req.params.id)
    res.status(200).json({
      message: 'La Stock_supplier a été supprimé',
    })
  } catch (error) {
    res.status(500).json({
      message: "La Stock_supplier n'a pas été supprimé",
      error: error.message,
    })
  }
}
