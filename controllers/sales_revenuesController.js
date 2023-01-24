const db = require('../models/index')
const Sale_revenue = db['Sales_revenues']

exports.getAllSales_revenues = async (req, res) => {
  try {
    const Sales_revenues = await Sale_revenue.findAll()
    res.status(200).json(Sales_revenues)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les revenus des ventes',
      error: error.message,
    })
  }
}

exports.getSale_revenue = async (req, res) => {
  try {
    const Sale_revenue = await Sale_revenue.findByPk(req.params.id)
    res.status(200).json(Sale_revenue)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les revenus des ventes',
      error: error.message,
    })
  }
}

exports.createSale_revenue = async (req, res) => {
  try {
    const newSale_revenue = await Sale_revenue.create(req.body)
    res.status(201).json({ message: 'created', data: newSale_revenue })
  } catch (error) {
    res.status(500).json({
      message: "les revenus des ventes n'ont pas été créées",
      error: error.message,
    })
  }
}

exports.updateSale_revenue = async (req, res) => {
  try {
    const updatedSale_revenue = await Sale_revenue.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedSale_revenue })
  } catch (error) {
    res.status(500).json({
      message: "les revenus des ventes n'ont pas été mise à jour",
      error: error.message,
    })
  }
}

exports.deleteSale_revenue = async (req, res) => {
  try {
    await Sale_revenue.findByPk(req.params.id)
    res.status(200).json({
      message: 'les revenus des ventes ont été supprimées',
    })
  } catch (error) {
    res.status(500).json({
      message: "les revenus des ventes n'ont pas été supprimées",
      error: error.message,
    })
  }
}
