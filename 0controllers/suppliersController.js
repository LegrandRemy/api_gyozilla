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

exports.getSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id)
    res.status(200).json(supplier)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer le fournisseur',
      error: error.message,
    })
  }
}

exports.createSupplier = async (req, res) => {
  try {
    const newSupplier = await Supplier.create(req.body)
    res.status(201).json({ message: 'created', data: newSupplier })
  } catch (error) {
    res.status(500).json({
      message: "Le fournisseur n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateSupplier = async (req, res) => {
  try {
    const updatedSupplier = await Supplier.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(201).json({ message: 'updated', data: updatedSupplier })
  } catch (error) {
    res.status(500).json({
      message: "Le fournisseur n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteSupplier = async (req, res) => {
  try {
    await Supplier.findByPk(req.params.id)
    res.status(200).json({
      message: 'Le fournisseur a été supprimé',
    })
  } catch (error) {
    res.status(500).json({
      message: "Le fournisseur n'a pas été supprimé",
      error: error.message,
    })
  }
}
