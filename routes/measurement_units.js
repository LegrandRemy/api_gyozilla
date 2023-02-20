/**
 *  @swagger
 * components:
 *   schemas:
 *     measurement_units:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type:
 *            int
 *           description: ID de l'unité de mesure
 *         unity:
 *           type: string
 *           description: nom de l'unité de mesure
 *         id_ressources:
 *           type: int
 *           description: ID de la ressource associée
 *
 *       example:
 *         id: 1
 *         unity: kg
 *         id_ressources: 8
 *
 */

/**
 * @swagger
 * tags:
 *   name: measurement_units
 *   description: API pour les unités de mesure
 * /api/measurement_units:
 *   get:
 *     summary: Lister toutes les unités de mesure
 *     tags: [measurement_units]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: ID de l'unité de mesure
 *       - in: query
 *         name: unity
 *         schema:
 *           type: string
 *         required: false
 *         description: nom de l'unité de mesure
 *       - in: query
 *         name: id_ressources
 *         schema:
 *          type: int
 *         required: false
 *         description: ID de la ressource associée
 *
 *     responses:
 *       200:
 *         description: La liste de toutes les unités de mesure
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/measurement_units'
 *   post:
 *     summary: Créer une nouvelle unité de mesure
 *     tags: [measurement_units]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/measurement_units'
 *     responses:
 *       200:
 *         description: L'unité de mesure a été créée.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/measurement_units'
 *       404:
 *         description: Une erreur est survenue.
 * /api/measurement_units/{id}:
 *   get:
 *     summary: Récupérer l'unité de mesure par l'id
 *     tags: [measurement_units]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: Unité de mesure par l'id
 *     responses:
 *       200:
 *         description: Unité de mesure par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/measurement_units'
 *       404:
 *         description: L'unité de mesure n'a pas été trouvée.
 *   patch:
 *    summary: Mise à jour de l'unité de mesure par son id
 *    tags: [measurement_units]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: true
 *        description: id de l'unité de mesure
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/measurement_units'
 *    responses:
 *      200:
 *        description: L'unité de mesure a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/measurement_units'
 *      404:
 *        description: L'unité de mesure n'a pas été trouvée.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une unité de mesure par son id
 *     tags: [measurement_units]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id de l'unité de mesure
 *
 *     responses:
 *       200:
 *         description: L'unité de mesure a été supprimée.
 *       404:
 *         description: L'unité de mesure n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const measurement_unitController = require('../controllers/measurement_unitsController')

router.get(
  '/api/measurement_units',
  measurement_unitController.getAllMeasurement_units,
)
router.get(
  '/api/measurement_units/:id',
  measurement_unitController.getMeasurement_unit,
)
router.post(
  '/api/measurement_units',
  measurement_unitController.createMeasurement_unit,
)
router.put(
  '/api/measurement_units/:id',
  measurement_unitController.updateMeasurement_unit,
)
router.delete(
  '/api/measurement_units/:id',
  measurement_unitController.deleteMeasurement_unit,
)

module.exports = router
