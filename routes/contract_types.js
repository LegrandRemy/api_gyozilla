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
 *         description: id du type de contrat
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         required: false
 *         description: nom du type de contrat
 *
 *     responses:
 *       200:
 *         description: La liste de tous les types de contrat
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/contract_types'
 *   post:
 *     summary: Créer un nouveau type de contrat
 *     tags: [contract_types]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/contract_types'
 *     responses:
 *       200:
 *         description: Le type de contrat a été créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contract_types'
 *       404:
 *         description: Une erreur est survenue.
 * /api/contract_types/{id}:
 *   get:
 *     summary: Récupérer le type de contrat par l'id
 *     tags: [contract_types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Type de contrat par l'id
 *     responses:
 *       200:
 *         description: Type de contrat par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/contract_types'
 *       404:
 *         description: Le type de contrat n'a pas été trouvé.
 *   patch:
 *    summary: Mise à jour du type de contrat par son id
 *    tags: [contract_types]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id du type de contrat
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/contract_types'
 *    responses:
 *      200:
 *        description: Le type de contrat a été mis à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/contract_types'
 *      404:
 *        description: Le type de contrat n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer un type de contrat par son id
 *     tags: [contract_types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id du type de contrat
 *
 *     responses:
 *       200:
 *         description: Le type de contrat a été supprimé.
 *       404:
 *         description: Le type de contrat n'a pas été trouvé.
 */

const express = require('express')
const router = express.Router()
const contract_typeController = require('../controllers/contract_typesController')

router.get('/api/contract_types', contract_typeController.getAllContract_types)
router.get('/api/contract_types/:id', contract_typeController.getContract_type)
router.post('/api/contract_types', contract_typeController.createContract_type)
router.patch(
  '/api/contract_types/:id',
  contract_typeController.updateContract_type,
)
router.delete(
  '/api/contract_types/:id',
  contract_typeController.deleteContract_type,
)

module.exports = router
