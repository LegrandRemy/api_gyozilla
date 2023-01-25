const express = require('express')
const router = express.Router()
const ressourceController = require('../controllers/ressourcesController')

router.get('/api/ressources/', ressourceController.getAllRessources)
router.get('/api/ressources/:id', ressourceController.getRessource)
router.post('/api/ressources', ressourceController.createRessource)
router.put('/api/ressources/:id', ressourceController.updateRessource)
router.delete('/api/ressources/:id', ressourceController.deleteRessource)

module.exports = router