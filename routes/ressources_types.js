const express = require('express')
const router = express.Router()
const ressource_typeController = require('../controllers/ressources_typesController')

router.get(
  '/api/ressources_types/',
  ressource_typeController.getAllRessources_types,
)
router.get(
  '/api/ressources_types/:id',
  ressource_typeController.getRessource_type,
)
router.post(
  '/api/ressources_types',
  ressource_typeController.createRessource_type,
)
router.put(
  '/api/ressources_types/:id',
  ressource_typeController.updateRessource_type,
)
router.delete(
  '/api/ressources_types/:id',
  ressource_typeController.deleteRessource_type,
)

module.exports = router
