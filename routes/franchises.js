/**
 * @swagger
 * components:
 *   schemas:
 *     franchises:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           description: ID de la franchise
 *         name:
 *           type: string
 *           description: Nom de la franchise
 *         address:
 *           type: string
 *           description: Adresse de la franchise
 *         phone:
 *           type: string
 *           description: Téléphone de la franchise
 *       example:
 *         id: 1
 *         name: "Rems Burger"
 *         address: "10 rue de la poupee qui tousse"
 *         phone: "0680313131"
 */

/**
 * @swagger
 * tags:
 *   name: franchises
 *   description: API pour les franchises
 * /api/franchises:
 *   get:
 *     summary: Lister tous les employés
 *     tags: [franchises]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id de la franchise
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: nom de la franchise
 *       - in: query
 *         name: address
 *         schema:
 *           type: string
 *         required: false
 *         description: Adresse de la franchise
 *       - in: query
 *         name: phone
 *         schema:
 *           type: string
 *         required: false
 *         description: téléphone de la franchise
 *     responses:
 *       200:
 *         description: La liste de toutes les franchises
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/franchises'
 *   post:
 *     summary: Créer une nouvelle franchise
 *     tags: [franchises]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/franchises'
 *     responses:
 *       200:
 *         description: La franchise a été créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/franchises'
 *       404:
 *         description: Une erreur est survenue.
 * /api/franchises/{id}:
 *   get:
 *     summary: Récupérer la franchise par l'id
 *     tags: [franchises]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: La franchise par l'id
 *     responses:
 *       200:
 *         description: La franchise par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/franchises'
 *       404:
 *         description: La franchise n'a pas été trouvé
 *   patch:
 *    summary: Mise à jour de la franchise par son id
 *    tags: [franchises]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: false
 *        description: id de la franchise
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/franchises'
 *    responses:
 *      200:
 *        description: La franchise a été mis à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/franchises'
 *      404:
 *        description: La franchise n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une franchise par son id
 *     tags: [franchises]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id de la franchise
 *     responses:
 *       200:
 *         description: La franchise a été supprimée.
 *       404:
 *         description: La franchise n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const franchiseController = require('../controllers/franchisesController')
const { verifyToken } = require('../controllers/tokenController')

router.get(
  '/api/franchises/',
  verifyToken,
  franchiseController.getAllFranchises,
)
router.get('/api/franchises/:id', verifyToken, franchiseController.getFranchise)
router.post(
  '/api/franchises/',
  verifyToken,
  franchiseController.createFranchise,
)
router.patch(
  '/api/franchises/:id',
  verifyToken,
  franchiseController.updateFranchise,
)
router.delete(
  '/api/franchises/:id',
  verifyToken,
  franchiseController.deleteFranchise,
)

module.exports = router
