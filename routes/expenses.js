/**
 * @swagger
 * components:
 *   schemas:
 *     expenses:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID de la dépense
 *         name:
 *           type: string
 *           description: Date de la dépense
 *         id_expense_types:
 *           type: integer
 *           description: Prix de la dépense
 *         amount:
 *           type: integer
 *           description: Montant de la dépense
 *       example:
 *         id: 1
 *         name: "Salaire de Jean Michel"
 *         id_expense_types: 1
 *         amount: 1700
 */

/**
 * @swagger
 * tags:
 *   name: expenses
 *   description: API pour les dépenses
 * /api/expenses:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lister toutes les dépenses
 *     tags: [expenses]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id de la dépense
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: nom de la dépense
 *       - in: query
 *         name: id_expense_types
 *         schema:
 *           type: integer
 *         required: false
 *         description: id du type de dépense
 *       - in: query
 *         name: amount
 *         schema:
 *           type: integer
 *         required: false
 *         description: status de la dépense
 *     responses:
 *       200:
 *         description: La liste de toutes les dépenses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/expenses'
 *   post:
 *     summary: Créer une nouvelle commmande
 *     tags: [expenses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/expenses'
 *     responses:
 *       200:
 *         description: Commande créée.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/expenses'
 *       404:
 *         description: Une erreur est survenue.
 * /api/expenses/{id}:
 *   get:
 *     summary: Récupérer la dépense par l'id
 *     tags: [expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Commmande par l'id
 *     responses:
 *       200:
 *         description: Commmande par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/expenses'
 *       404:
 *         description: La dépense n'a pas été trouvé.
 *   patch:
 *    summary: Mise à jour de la dépense par son id
 *    tags: [expenses]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de la dépense
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/expenses'
 *    responses:
 *      200:
 *        description: La dépense a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/expenses'
 *      404:
 *        description: La dépense n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une dépense par son id
 *     tags: [expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de la dépense
 *
 *     responses:
 *       200:
 *         description: La dépense a été supprimé.
 *       404:
 *         description: La dépense n'a pas été trouvé.
 */

const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expensesController");
const { verifyToken } = require("../controllers/tokenController");

router.get("/api/expenses", verifyToken, expenseController.getAllExpenses);
router.get("/api/expenses/:id", verifyToken, expenseController.getExpense);
router.get(
  "/api/expenses/expense_types/:id",
  verifyToken,
  expenseController.getExpenseByExpenseType
);
router.post("/api/expenses", verifyToken, expenseController.createExpense);
router.patch("/api/expenses/:id", verifyToken, expenseController.updateExpense);
router.delete(
  "/api/expenses/:id",
  verifyToken,
  expenseController.deleteExpense
);

module.exports = router;
