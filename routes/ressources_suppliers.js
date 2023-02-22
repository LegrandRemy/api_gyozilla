const express = require('express')
const router = express.Router()
const ressource_supplierController = require('../controllers/ressources_suppliersController')
const { verifyToken } = require('../controllers/tokenController')

router.get(
  '/api/ressources_suppliers/',
  verifyToken,
  ressource_supplierController.getAllRessources_suppliers,
)
router.get(
  '/api/ressources_suppliers/:id',
  verifyToken,
  ressource_supplierController.getRessource_supplier,
)
router.post(
  '/api/ressources_suppliers',
  verifyToken,
  ressource_supplierController.createRessource_supplier,
)
router.patch(
  '/api/ressources_suppliers/:id',
  ressource_supplierController.updateRessource_supplier,
)
router.delete(
  '/api/ressources_suppliers/:id',
  verifyToken,
  ressource_supplierController.deleteRessource_supplier,
)

module.exports = router
