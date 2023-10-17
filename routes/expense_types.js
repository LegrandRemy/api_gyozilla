/**
 * @swagger
 * components:
 *   schemas:
 *     expense_types:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID
 *         name:
 *           type: string
 *           description: Nom du type de dépense
 *       example:
 *         id: 1
 *         name: Employé
 */

/**
 * @swagger
 * tags:
 *   name: expense_types
 *   description: API pour les types de dépenses
 * /api/expense_types:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lister tous les types de dépense
 *     tags: [expense_types]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Nom du type de dépense
 *     responses:
 *       200:
 *         description: La liste de tous les types de dépense
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/expense_types'
 *   post:
 *     summary: Créer un nouveau type de dépense
 *     tags: [expense_types]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/expense_types'
 *     responses:
 *       200:
 *         description: Type de dépense créée.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/expense_types'
 *       404:
 *         description: Une erreur est survenue.
 * /api/expense_types/{id}:
 *   get:
 *     summary: Récupérer le type de dépense par l'id
 *     tags: [expense_types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Type de commmande par l'id
 *     responses:
 *       200:
 *         description: Type de commmande par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/expense_types'
 *       404:
 *         description: Le type de dépense n'a pas été trouvé.
 *   delete:
 *     summary: Supprimer un type de dépense par son id
 *     tags: [expense_types]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id du type de dépense
 *
 *     responses:
 *       200:
 *         description: Le type de dépense a été supprimé.
 *       404:
 *         description: Le type de dépense n'a pas été trouvé.
 */

const express = require("express");
const router = express.Router();
const expenseTypesController = require("../controllers/expenseTypesController");
const { verifyToken } = require("../controllers/tokenController");

router.get("/api/expense_types", expenseTypesController.getAllExpenseTypes);
router.get("/api/expense_types/:id", expenseTypesController.getExpenseType);
router.post(
  "/api/expense_types",
  verifyToken,
  expenseTypesController.createExpenseType
);
router.delete(
  "/api/expense_types/:id",
  verifyToken,
  expenseTypesController.deleteExpenseType
);

module.exports = router;
