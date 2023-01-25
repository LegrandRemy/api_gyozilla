const express = require('express')
const router = express.Router()
const ressource_supplierController = require('../controllers/ressources_suppliersController')

router.get(
  '/api/ressources_suppliers/',
  ressource_supplierController.getAllRessources_suppliers,
)
router.get(
  '/api/ressources_suppliers/:id',
  ressource_supplierController.getRessource_supplier,
)
router.post(
  '/api/ressources_suppliers',
  ressource_supplierController.createRessource_supplier,
)
router.put(
  '/api/ressources_suppliers/:id',
  ressource_supplierController.updateRessource_supplier,
)
router.delete(
  '/api/ressources_suppliers/:id',
  ressource_supplierController.deleteRessource_supplier,
)

module.exports = router
