/**
 * @swagger
 * components:
 *   schemas:
 *     hiring:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           description: ID du recrutement
 *         name:
 *           type: string
 *           description: Nom du recrutement
 *         city:
 *           type: string
 *           description: Ville du recrutement
 *         description:
 *           type: string
 *           description: Description du recrutement
 *       example:
 *         id: 1
 *         name: "Rems Burger"
 *         city: "10 rue de la poupee qui tousse"
 *         description: "Un job de rêve"
 */

/**
 * @swagger
 * tags:
 *   name: hiring
 *   description: API pour les hiring
 * /api/hiring:
 *   get:
 *     summary: Lister toutes les recrutements
 *     tags: [hiring]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id du recrutement
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: nom du recrutement
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         required: false
 *         description: Adresse du recrutement
 *       - in: query
 *         name: description
 *         schema:
 *           type: string
 *         required: false
 *         description: description du recrutement
 *     responses:
 *       200:
 *         description: La liste de tous les recrutements
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/hiring'
 *   post:
 *     summary: Créer un nouveau recrutement
 *     tags: [hiring]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/hiring'
 *     responses:
 *       200:
 *         description: Le recrutement a été créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hiring'
 *       404:
 *         description: Une erreur est survenue.
 * /api/hiring/{id}:
 *   get:
 *     summary: Récupérer le recrutement par l'id
 *     tags: [hiring]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Le recrutement par l'id
 *     responses:
 *       200:
 *         description: Le recrutement par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/hiring'
 *       404:
 *         description: Le recrutement n'a pas été trouvé
 *   patch:
 *    summary: Mise à jour du recrutement par son id
 *    tags: [hiring]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: false
 *        description: id du recrutement
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/hiring'
 *    responses:
 *      200:
 *        description: Le recrutement a été mis à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/hiring'
 *      404:
 *        description: Le recrutement n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer un recrutement par son id
 *     tags: [hiring]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: false
 *         description: id du recrutement
 *     responses:
 *       200:
 *         description: Le recrutement a été supprimée.
 *       404:
 *         description: Le recrutement n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const hiringController = require('../controllers/hiringController')
const { verifyToken } = require('../controllers/tokenController')

router.get(
  '/api/hiring/',
  hiringController.getAllHirings,
)
router.get('/api/hiring/:id', hiringController.getHirings)
router.post(
  '/api/hiring/',
  verifyToken,
  hiringController.createHirings,
)
router.patch(
  '/api/hiring/:id',
  verifyToken,
  hiringController.updateHirings,
)
router.delete(
  '/api/hiring/:id',
  verifyToken,
  hiringController.deleteHirings,
)

module.exports = router
