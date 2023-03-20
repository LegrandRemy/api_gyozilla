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
 *         note:
 *           type: int
 *           description: Note de l'évaluation
 *         comment:
 *           type: string
 *           description: Commentaire lié à l'évaluation
 *
 *       example:
 *         id: 1
 *         note: 4
 *         comment: "J'ai beaucoup apprécié mon repas chez Gyozilla, service efficace et personnel agréable"
 *
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
 *         description: ID de l'évaluation'
 *       - in: query
 *         name: note
 *         schema:
 *           type: int
 *         required: false
 *         description: Note de l'évaluation
 *       - in: query
 *         name: comment
 *         schema:
 *           type: int
 *         required: false
 *         description: Commentaire lié à l'évaluation
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
 *          type: int
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
 *           type: int
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

router.get('/api/ratings/', ratingsController.getAllRatings)
router.get('/api/ratings/:id', ratingsController.getRating)
router.post('/api/ratings', ratingsController.createRating)
router.patch('/api/ratings/:id', ratingsController.updateRating)
router.delete('/api/ratings/:id', ratingsController.deleteRating)

module.exports = router
