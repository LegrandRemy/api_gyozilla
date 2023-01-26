/**
 * @swagger
 * components:
 *   schemas:
 *     hourly_types:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID du type de plage horaire
 *         name:
 *           type: string
 *           description: nom du type de plage horaire
 *
 *       example:
 *         id: 1
 *         name: overtime
 *
 */

/**
 * @swagger
 * tags:
 *   name: hourly_types
 *   description: API pour les types de plage horaire
 * /api/hourly_types:
 *   get:
 *     summary: Lister tous les types de plage horaire
 *     tags: [hourly_types]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id du type de plage horaire
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: nom du type de plage horaire
 *
 *     responses:
 *       200:
 *         description: La liste de tous les types de plage horaire
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/hourly_types'
 *   post:
 *     summary: Créer un nouveau type de plage horaire
 *     tags: [hourly_types]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/hourly_types'
 *     responses:
 *       200:
 *         description: Le type de plage horaire a été créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hourly_types'
 *       404:
 *         description: Une erreur est survenue.
 * /api/hourly_types/{id}:
 *   get:
 *     summary: Récupérer le type de plage horaire par l'id
 *     tags: [hourly_types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: Type de plage horaire par l'id
 *     responses:
 *       200:
 *         description: Type de plage horaire par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hourly_types'
 *       404:
 *         description: Le type de plage horaire n'a pas été trouvé.
 *   patch:
 *    summary: Mise à jour du type de plage horaire par son id
 *    tags: [hourly_types]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: true
 *        description: id du type de plage horaire
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/hourly_types'
 *    responses:
 *      200:
 *        description: Le type de plage horaire a été mis à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/hourly_types'
 *      404:
 *        description: Le type de plage horaire n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer un type de plage horaire par son id
 *     tags: [hourly_types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id du type de plage horaire
 *
 *     responses:
 *       200:
 *         description: Le type de plage horaire a été supprimé.
 *       404:
 *         description: Le type de plage horaire n'a pas été trouvé.
 */

const express = require('express')
const router = express.Router()
const hourly_typeController = require('../controllers/hourly_typesController')

router.get('/api/hourly_types', hourly_typeController.getAllHourly_types)
router.get('/api/hourly_types/:id', hourly_typeController.getHourly_type)
router.post('/api/hourly_types', hourly_typeController.createHourly_type)
router.put('/api/hourly_types/:id', hourly_typeController.updateHourly_type)
router.delete('/api/hourly_types/:id', hourly_typeController.deleteHourly_type)

module.exports = router
