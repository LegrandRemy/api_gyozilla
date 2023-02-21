/**
 * @swagger
 * components:
 *   schemas:
 *     hourlies:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID de la plage horaire
 *         start:
 *           type: date
 *           description: Début de la plage horaire
 *         end:
 *           type: string
 *           description: Fin de la plage horaire
 *         id_hourlies_types:
 *           type: int
 *           description: ID du type de plage horaire
 *
 *       example:
 *         id: 1
 *         start: 023-09-22T15:00:00
 *         end: 023-09-22T18:00:00
 *         id_hourlies_types: 1
 *
 */

/**
 * @swagger
 * tags:
 *   name: hourlies
 *   description: API pour les plages horaires
 * /api/hourlies:
 *   get:
 *     summary: Lister toutes les plages horaires
 *     tags: [hourlies]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id de la plage horaire
 *       - in: query
 *         name: start
 *         schema:
 *           type: date
 *         required: false
 *         description: début de la plage horaire
 *       - in: query
 *         name: end
 *         schema:
 *           type: date
 *         required: false
 *         description: fin de la plage horaire
 *       - in: query
 *         name: id_hourlies_types
 *         schema:
 *           type: int
 *         required: false
 *         description: id du type de plage horaire
 *
 *     responses:
 *       200:
 *         description: La liste de toutes les plages horaires
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/hourlies'
 *   post:
 *     summary: Créer une nouvelle plage horaire
 *     tags: [hourlies]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/hourlies'
 *     responses:
 *       200:
 *         description: La plage horaire créée.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hourlies'
 *       404:
 *         description: Une erreur est survenue.
 * /api/hourlies/{id}:
 *   get:
 *     summary: Récupérer la plage horaire par l'id
 *     tags: [hourlies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: Plage horaire par l'id
 *     responses:
 *       200:
 *         description: Plage horaire par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hourlies'
 *       404:
 *         description: La plage horaire n'a pas été trouvée.
 *   patch:
 *    summary: Mise à jour de la plage horaire par son id
 *    tags: [hourlies]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: true
 *        description: id de la plage horaire
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/hourlies'
 *    responses:
 *      200:
 *        description: La plage horaire a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/hourlies'
 *      404:
 *        description: La plage horaire n'a pas été trouvée.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une plage horaire par son id
 *     tags: [hourlies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id de la plage horaire
 *
 *     responses:
 *       200:
 *         description: La plage horaire a été supprimée.
 *       404:
 *         description: La plage horaire n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const hourliesController = require('../controllers/hourliesController')

router.get('/api/hourlies/', hourliesController.getAllHourlies)
router.get('/api/hourlies/:id', hourliesController.getHourly)
router.post('/api/hourlies', hourliesController.createHourly)
router.patch('/api/hourlies/:id', hourliesController.updateHourly)
router.delete('/api/hourlies/:id', hourliesController.deleteHourly)

module.exports = router
