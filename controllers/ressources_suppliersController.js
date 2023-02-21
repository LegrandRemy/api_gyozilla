const db = require('../models/index')
const Ressource_supplier = db['Ressources_suppliers']

exports.getAllRessources_suppliers = async (req, res) => {
  console.log('ici');
  try {
    const ressources_suppliers = await Ressource_supplier.findAll()
    
    res.status(200).json(ressources_suppliers)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer les Ressource_suppliers',
      error: error.message,
    })
  }
}

exports.getRessource_supplier = async (req, res) => {
  try {
    const Ressource_supplier = await Ressource_supplier.findByPk(req.params.id)
    res.status(200).json(Ressource_supplier)
  } catch (error) {
    res.status(500).json({
      message: 'Impossible de récupérer la Ressource_supplier',
      error: error.message,
    })
  }
}

exports.createRessource_supplier = async (req, res) => {
  try {
    const newRessource_supplier = await Ressource_supplier.create(req.body)
    res.status(201).json({ message: 'created', data: newRessource_supplier })
  } catch (error) {
    res.status(500).json({
      message: "La Ressource_supplier n'a pas été créé",
      error: error.message,
    })
  }
}

exports.updateRessource_supplier = async (req, res) => {
  try {
    const updatedRessource_supplier = await Ressource_supplier.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      },
    )
    res
      .status(201)
      .json({ message: 'updated', data: updatedRessource_supplier })
  } catch (error) {
    res.status(500).json({
      message: "La Ressource_supplier n'a pas été mis à jour",
      error: error.message,
    })
  }
}

exports.deleteRessource_supplier = async (req, res) => {
  try {
    await Ressource_supplier.findByPk(req.params.id)
    res.status(200).json({
      message: 'La Ressource_supplier a été supprimé',
    })
  } catch (error) {
    res.status(500).json({
      message: "La Ressource_supplier n'a pas été supprimé",
      error: error.message,
    })
  }
}
