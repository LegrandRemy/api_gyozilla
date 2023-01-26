/**
 * @swagger
 * components:
 *   schemas:
 *     contract_types:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID du type de contrat
 *         type:
 *           type: string
 *           description: Nom du type de contrat
 *       example:
 *         id: 1
 *         type: CDD
 */

/**
 * @swagger
 * tags:
 *   name: contract_types
 *   description: API pour les types de contrat
 * /api/contract_types:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lister tous les types de contrat
 *     tags: [contract_types]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id du type de
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
const contract_typeController = require('../controllers/contract_typesController')

router.get('/api/contract_types', contract_typeController.getAllContract_types)
router.get('/api/contract_types/:id', contract_typeController.getContract_type)
router.post('/api/contract_types', contract_typeController.createContract_type)
router.put(
  '/api/contract_types/:id',
  contract_typeController.updateContract_type,
)
router.delete(
  '/api/contract_types/:id',
  contract_typeController.deleteContract_type,
)

module.exports = router
