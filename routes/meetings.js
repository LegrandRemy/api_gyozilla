/**
 * @swagger
 * components:
 *   schemas:
 *     meetings:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID du rendez-vous
 *         start_hour:
 *           type: date
 *           description: Heure de début du rendez-vous
 *         end_hour:
 *           type: date
 *           description: Heure de fin du rendez-vous
 *          id_users:
 *           type: date
 *           description: ID de l'utilisateur associé au rendez-vous
 *
 *       example:
 *         id: 1
 *         start_hour: 023-09-22T15:00:00
 *         end_hour: 023-09-22T18:00:00
 *         id_users: 1
 *
 */

/**
 * @swagger
 * tags:
 *   name: meetings
 *   description: API pour les rendez-vous
 * /api/meetings:
 *   get:
 *     summary: Lister tous les rendez-vous
 *     tags: [meetings]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: ID du rendez-vous
 *       - in: query
 *         name: start_hour
 *         schema:
 *           type: date
 *         required: false
 *         description: Heure de début de rendez-vous
 *        - in: query
 *         name: end_hour
 *         schema:
 *           type: date
 *         required: false
 *         description: Heure de fin de rendez-vous
 *        - in: query
 *         name: id_users
 *         schema:
 *           type: int
 *         required: false
 *         description: ID de l'utilisateur associé au rendez-vous
 *
 *     responses:
 *       200:
 *         description: La liste de tous les rendez-vous
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/meetings'
 *   post:
 *     summary: Créer un nouveau rendez-vous
 *     tags: [meetings]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/meetings'
 *     responses:
 *       200:
 *         description: Le rendez-vous a été créé'.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/meetings'
 *       404:
 *         description: Une erreur est survenue.
 * /api/meetings/{id}:
 *   get:
 *     summary: Récupérer le rendez-vous par l'id
 *     tags: [meetings]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: Rendez-vous par l'id
 *     responses:
 *       200:
 *         description: Rendez-vous par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/meetings'
 *       404:
 *         description: Le rendez-vous n'a pas été trouvée.
 *   patch:
 *    summary: Mise à jour de du rendez-vous par son id
 *    tags: [meetings]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: true
 *        description: id du rendez-vous
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/meetings'
 *    responses:
 *      200:
 *        description: Le rendez-vous a été mis à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/meetings'
 *      404:
 *        description: Le rendez-vous n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer un rendez-vous par son id
 *     tags: [meetings]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id du rendez-vous
 *
 *     responses:
 *       200:
 *         description: Le rendez-vous a été supprimé.
 *       404:
 *         description: Le rendez-vous n'a pas été trouvé.
 */

const express = require('express')
const router = express.Router()
const meetingController = require('../controllers/meetingsController')

router.get('/api/meetings', meetingController.getAllMeetings)
router.get('/api/meetings/:id', meetingController.getMeeting)
router.post('/api/meetings', meetingController.createMeeting)
router.put('/api/meetings/:id', meetingController.updateMeeting)
router.delete('/api/meetings/:id', meetingController.deleteMeeting)

module.exports = router
