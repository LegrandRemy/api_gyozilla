const db = require('../models/index')
const Supplier = db['Suppliers']

exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll()
    res.status(200).json(suppliers)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les fournisseurs',
      error: error.message,
    })
  }
}
