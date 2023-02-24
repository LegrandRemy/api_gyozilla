/**
 * @swagger
 * components:
 *   schemas:
 *     employees:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           description: ID de l'employé
 *         lastname:
 *           type: string
 *           description: Nom de l'employé
 *         firstname:
 *           type: string
 *           description: Prénom de l'employé
 *         phone:
 *           type: string
 *           description: Téléphone de l'employé
 *         email:
 *           type: string
 *           description: Email de l'employé
 *         password:
 *           type: string
 *           description: Mdp de l'employé
 *         id_franchises:
 *           type: int
 *           description: ID de la franchise de l'employé
 *         id_roles:
 *           type: int
 *           description: ID du role de l'employé
 *       example:
 *         id: 1
 *         lastname: Leveque
 *         firstname: Marcus
 *         phone: 0680313131
 *         email: marcus.leveque@gmail.com
 *         password: ab123456
 *         id_franchises: 3
 *         id_roles: 1
 */

/**
 * @swagger
 * tags:
 *   name: employees
 *   description: API pour les employés
 * /api/employees:
 *   get:
 *     summary: Lister tous les employés
 *     tags: [employees]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id de l'employé
 *       - in: query
 *         name: lastname
 *         schema:
 *           type: string
 *         required: false
 *         description: nom de l'employé
 *       - in: query
 *         name: firstname
 *         schema:
 *           type: string
 *         required: false
 *         description: prénom de l'employé
 *       - in: query
 *         name: phone
 *         schema:
 *           type: string
 *         required: false
 *         description: téléphone de l'employé
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: false
 *         description: Email de l'employé
 *       - in: query
 *         name: id_franchises
 *         schema:
 *           type: int
 *         required: false
 *         description: Id de la franchise de l'employé
 *       - in: query
 *         name: id_roles
 *         schema:
 *           type: int
 *         required: false
 *         description: Id du role de l'employé
 *     responses:
 *       200:
 *         description: La liste de tous les employés
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/employees'
 *   post:
 *     summary: Créer un nouvel employé
 *     tags: [employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/employees'
 *     responses:
 *       200:
 *         description: L'employé a été créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/employees'
 *       404:
 *         description: Une erreur est survenue.
 * /api/employees/{id}:
 *   get:
 *     summary: Récupérer l'employé par l'id
 *     tags: [employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: L'employé par l'id
 *     responses:
 *       200:
 *         description: L'employé par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/employees'
 *       404:
 *         description: L'employé n'a pas été trouvé
 *   patch:
 *    summary: Mise à jour de l'employé par son id
 *    tags: [employees]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: false
 *        description: id de l'employé
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/employees'
 *    responses:
 *      200:
 *        description: L'employé a été mis à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/employees'
 *      404:
 *        description: L'employé n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer un employé par son id
 *     tags: [employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id de l'employé
 *     responses:
 *       200:
 *         description: L'employé a été supprimé.
 *       404:
 *         description: L'employé n'a pas été trouvé.
 */

const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')
const { verifyToken } = require('../controllers/tokenController')

router.get('/api/employees/', verifyToken, employeeController.getAllEmployees)
router.get('/api/employees/:id', verifyToken, employeeController.getEmployee)
router.post('/api/employees/', verifyToken, employeeController.createEmployee)
router.patch(
  '/api/employees/:id',
  verifyToken,
  employeeController.updateEmployee,
)
router.delete(
  '/api/employees/:id',
  verifyToken,
  employeeController.deleteEmployee,
)

module.exports = router
