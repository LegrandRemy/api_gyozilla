/**
 * @swagger
 * components:
 *   schemas:
 *     ressources:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID de la ressource
 *         label:
 *           type: string
 *           description: Nom de la ressource
 *         price:
 *           type: string
 *           description: Prix de la ressource
 *         reference:
 *           type: string
 *           description: Reference de la ressource
 *         quantity:
 *           type: string
 *           description: Quantity de la ressource
 *
 *       example:
 *         id: 1
 *         label: Riz
 *         price: 1
 *         reference: MB500XF490
 *         quantity: 50
 *
 */

/**
 * @swagger
 * tags:
 *   name: ressources
 *   description: API pour les ressources
 * /api/ressources:
 *   get:
 *     summary: Lister toutes les ressources
 *     tags: [ressources]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id de la ressource
 *       - in: query
 *         name: label
 *         schema:
 *           type: string
 *         required: false
 *         description: nom de la ressource
 *       - in: query
 *         name: price
 *         schema:
 *           type: string
 *         required: false
 *         description: prix de la ressource
 *       - in: query
 *         name: reference
 *         schema:
 *           type: string
 *         required: false
 *         description: reference de la ressource
 *       - in: query
 *         name: quantity
 *         schema:
 *           type: string
 *         required: false
 *         description: quantité de la ressource
 *
 *     responses:
 *       200:
 *         description: La liste de toutes les ressources
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ressources'
 *   post:
 *     summary: Créer une nouvelle ressource
 *     tags: [ressources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ressources'
 *     responses:
 *       200:
 *         description: Ressource créée.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ressources'
 *       404:
 *         description: Une erreur est survenue.
 * /api/ressources/{id}:
 *   get:
 *     summary: Récupérer la ressource par l'id
 *     tags: [ressources]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ressource par l'id
 *     responses:
 *       200:
 *         description: ressource par l'id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ressources'
 *       404:
 *         description: La ressources n'a pas été trouvée
 *   patch:
 *    summary: Mise à jour de la ressource par son id
 *    tags: [ressources]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: true
 *        description: id de la ressource
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ressources'
 *    responses:
 *      200:
 *        description: La ressource a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ressources'
 *      404:
 *        description: La ressource n'a pas été trouvée.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une ressource par son id
 *     tags: [ressources]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id de la ressource
 *     responses:
 *       200:
 *         description: La ressource a été supprimée.
 *       404:
 *         description: La ressources n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const ressourceController = require('../controllers/ressourcesController')

router.get('/api/ressources/', ressourceController.getAllRessources)
router.get('/api/ressources/:id', ressourceController.getRessource)
router.post('/api/ressources', ressourceController.createRessource)
router.put('/api/ressources/:id', ressourceController.updateRessource)
router.delete('/api/ressources/:id', ressourceController.deleteRessource)

module.exports = router
