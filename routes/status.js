/**
 * @swagger
 * components:
 *   schemas:
 *     status:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID de la commande
 *         name:
 *           type: string
 *           description: Paiement de la commande
 *       example:
 *         id: 1
 *         name: En cours
 */

/**
 * @swagger
 * tags:
 *   name: status
 *   description: API pour les status
 * /api/status:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lister toutes les status
 *     tags: [status]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id de la commande
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: nom du status
 *     responses:
 *       200:
 *         description: La liste de tous les status
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/status'
 *   post:
 *     summary: Créer un nouveau status
 *     tags: [status]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/status'
 *     responses:
 *       200:
 *         description: Status créée.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/status'
 *       404:
 *         description: Une erreur est survenue.
 * /api/status/{id}:
 *   get:
 *     summary: Récupérer le status par l'id
 *     tags: [status]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Status par l'id
 *     responses:
 *       200:
 *         description: Status par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/status'
 *       404:
 *         description: Le status n'a pas été trouvé.
 *   patch:
 *    summary: Mise à jour du status par son id
 *    tags: [status]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id du status
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/status'
 *    responses:
 *      200:
 *        description: Le status a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/status'
 *      404:
 *        description: Le status n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer un status par son id
 *     tags: [status]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id du status
 *
 *     responses:
 *       200:
 *         description: Le status a été supprimé.
 *       404:
 *         description: Le status n'a pas été trouvé.
 */

const express = require('express')
const router = express.Router()
const statusController = require('../controllers/statusController')
const { verifyToken } = require('../controllers/tokenController')

router.get('/api/status', verifyToken, statusController.getAllStatus)
router.get('/api/status/:id', verifyToken, statusController.getStatus)
router.post('/api/status', verifyToken, statusController.createStatus)
router.put('/api/status/:id', verifyToken, statusController.updateStatus)
router.delete('/api/status/:id', verifyToken, statusController.deleteStatus)

module.exports = router
