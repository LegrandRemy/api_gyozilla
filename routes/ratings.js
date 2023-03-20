/**
 * @swagger
 * components:
 *   schemas:
 *     ratings:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID de l'évaluation
 *         id_customers:
 *           type: int
 *           description: ID du client
 *         id_products:
 *           type: int
 *           description: ID du produit
 *         note:
 *           type: int
 *           description: Note lié à l'évaluation
 *
 *       example:
 *         id: 1
 *         id_customers: 1
 *         id_products: 1
 *         note: 4
 */

/**
 * @swagger
 * tags:
 *   name: ratings
 *   description: API pour les évaluations
 * /api/ratings:
 *   get:
 *     summary: Lister toutes les évaluations
 *     tags: [ratings]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: ID de l'évaluation
 *       - in: query
 *         name: id_customers
 *         schema:
 *           type: int
 *         required: false
 *         description: ID du client
 *       - in: query
 *         name: id_products
 *         schema:
 *           type: int
 *         required: false
 *         description: ID du produit
 *       - in: query
 *         name: note
 *         schema:
 *           type: int
 *         required: false
 *         description: Note de l'évaluation
 *
 *     responses:
 *       200:
 *         description: La liste de toutes les évaluations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ratings'
 *   post:
 *     summary: Créer une nouvelle évaluation
 *     tags: [ratings]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ratings'
 *     responses:
 *       200:
 *         description: L'évaluation a été créée'.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ratings'
 *       404:
 *         description: Une erreur est survenue.
 * /api/ratings/{id}:
 *   get:
 *     summary: Récupérer l'évaluation par l'id
 *     tags: [ratings]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: false
 *         description: Evaluation par l'id
 *     responses:
 *       200:
 *         description: Evaluation par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ratings'
 *       404:
 *         description: L'évaluation n'a pas été trouvée.
 *   patch:
 *    summary: Mise à jour de l'évaluation par son id
 *    tags: [ratings]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: false
 *        description: id de la recette
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ratings'
 *    responses:
 *      200:
 *        description: L'évaluation a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ratings'
 *      404:
 *        description: L'évaluation n'a pas été trouvée.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une évaluation par son id
 *     tags: [ratings]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de l'évaluation
 *
 *     responses:
 *       200:
 *         description: L'évaluation a été supprimée.
 *       404:
 *         description: L'évaluation n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const ratingsController = require('../controllers/ratingsController')
const { verifyToken } = require('../controllers/tokenController')

router.get('/api/ratings/', verifyToken, ratingsController.getAllRatings)
router.get('/api/ratings/:id', verifyToken, ratingsController.getRating)
router.post('/api/ratings', verifyToken, ratingsController.createRating)
router.patch('/api/ratings/:id', verifyToken, ratingsController.updateRating)
router.delete('/api/ratings/:id', verifyToken, ratingsController.deleteRating)

module.exports = router
