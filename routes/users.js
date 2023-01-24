/**
 * @swagger
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       required:
 *         - 
 *       properties:
 *         id:
 *           type: int
 *           description: ID de l'utilisateur
 *         lastname:
 *           type: string
 *           description: Nom de l'utilisateur
 *         firstname:
 *           type: string
 *           description: Prénom de l'utilisateur
 *         email:
 *           type: string
 *           description: Email de l'utilisateur
 *         phone:
 *           type: string
 *           description: Numéro de téléphone de l'utilisateur
 *         address:
 *           type: string
 *           description: Adresse de l'utilisateur
 *         zipcode:
 *           type: string
 *           description: Code postal de l'utilisateur
 *         city:
 *           type: string
 *           description: Ville de l'utilisateur
 *         hiring_date:
 *           type: string
 *           description: Date d'embauche de l'employé
 *         salary:
 *           type: string
 *           description: Salaire de l'employé
 *         fidelitypoints:
 *           type: string
 *           description: Points de fidélité du client si client
 *       example:
 *         id: 1
 *         lastname: Robert
 *         firstname: Jean
 *         email: robert.jean@gmail.com
 *         phone: 0600000000
 *         adress: 68 rue de l'impasse
 *         zipcode: 80000
 *         city: Amiens
 *         hiring_date: 2020-05-20
 *         salary: 1800
 *         fidelitypoints: 50
 */

/**
 * @swagger
 * tags:
 *   name: users
 *   description: API pour les utilisateurs
 * /api/users:
 *   get:
 *     summary: Liste tous les utilisateurs
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id de l'utilisateur
 *       - in: path
 *         name: lastname
 *         schema:
 *           type: string
 *         required: false
 *         description: nom de l'utilisateur
 *       - in: path
 *         name: firstname
 *         schema:
 *           type: string
 *         required: false
 *         description: prénom de l'utilisateur
 *       - in: path
 *         name: email
 *         schema:
 *           type: string
 *         required: false
 *         description: Email de l'utilisateur
 *       - in: path
 *         name: phone
 *         schema:
 *           type: string
 *         required: false
 *         description: Téléphone de l'utilisateur
 *       - in: path
 *         name: adress
 *         schema:
 *           type: string
 *         required: false
 *         description: Adresse de l'utilisateur
 *       - in: path
 *         name: zipcode
 *         schema:
 *           type: string
 *         required: false
 *         description: Code postal de l'utilisateur
 *       - in: path
 *         name: city
 *         schema:
 *           type: string
 *         required: false
 *         description: Ville de l'utilisateur
 *       - in: path
 *         name: hiring_date
 *         schema:
 *           type: string
 *         required: false
 *         description: Date d'embauche de l'employé
 *       - in: path
 *         name: salary
 *         schema:
 *           type: string
 *         required: false
 *         description: Salaire de l'employé
 *       - in: path
 *         name: fidelitypoints
 *         schema:
 *           type: string
 *         required: false
 *         description: Points de fidélité de l'utilisateur
 *     responses:
 *       200:
 *         description: La liste de tous les utilisateurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/users'
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     tags: [users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/users'
 *     responses:
 *       200:
 *         description: L'utilisateur créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users'
 *       500:
 *         description: Une erreur est survenue.
 * /api/users/{id}:
 *   get:
 *     summary: Récupérer l'utilisateur par l'id
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Utilisateur par l'id
 *     responses:
 *       200:
 *         description: Utilisateur par l'id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users'
 *       404:
 *         description: L'utilisateur n'a pas été trouvé.
 *   put:
 *    summary: Mise à jour de l'utilisateur par son id
 *    tags: [users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de l'utilisateur
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/users'
 *    responses:
 *      200:
 *        description: L'utilisateur a été mis à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/users'
 *      404:
 *        description: L'utilisateur n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer un utilisateur par son id
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de l'utilisateur
 *
 *     responses:
 *       200:
 *         description: L'utilisateur a été supprimé.
 *       404:
 *         description: L'utilisateur n'a pas été trouvé.
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

router.get('/api/users/', userController.getAllUsers);
router.get('/api/users/:id', userController.getUser);
router.post('/api/users', userController.createUser);
router.put('/api/users/:id', userController.updateUser);
router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;
