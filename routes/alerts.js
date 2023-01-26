/**
 * @swagger
 * components:
 *   schemas:
 *     alerts:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID de l'alerte
 *         alert:
 *           type: string
 *           description: Nom de l'alerte
 *       example:
 *         id: 1
 *         alert: StockAlert
 */

/**
 * @swagger
 * tags:
 *   name: alerts
 *   description: API pour les alertes
 * /api/alerts:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lister toutes les alertes
 *     tags: [alerts]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id de l'alerte
 *       - in: query
 *         name: lastname
 *         schema:
 *           type: string
 *         required: false
 *         description: nom de l'alerte
 *
 *     responses:
 *       200:
 *         description: La liste de toutes les alertes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/alerts'
 *   post:
 *     summary: Créer une nouvelle alerte
 *     tags: [alerts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/alerts'
 *     responses:
 *       200:
 *         description: L'alerte créée.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/alerts'
 *       404:
 *         description: Une erreur est survenue.
 * /api/alerts/{id}:
 *   get:
 *     summary: Récupérer l'alerte par l'id
 *     tags: [alerts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Alerte par l'id
 *     responses:
 *       200:
 *         description: Alerte par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/alerts'
 *       404:
 *         description: L'alerte n'a pas été trouvée.
 *   patch:
 *    summary: Mise à jour de l'alerte par son id
 *    tags: [alerts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de l'alerte
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/alerts'
 *    responses:
 *      200:
 *        description: L'alerte a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/alerts'
 *      404:
 *        description: L'alerte n'a pas été trouvée.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une alerte par son id
 *     tags: [alerts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de l'alerte
 *
 *     responses:
 *       200:
 *         description: L'alerte a été supprimée.
 *       404:
 *         description: L'alerte n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const alertController = require('../controllers/alertsController')

router.get('/api/alerts', alertController.getAllAlerts)
router.get('/api/alerts/:id', alertController.getAlert)
router.post('/api/alerts', alertController.createAlert)
router.put('/api/alerts/:id', alertController.updateAlert)
router.delete('/api/alerts/:id', alertController.deleteAlert)

module.exports = router
