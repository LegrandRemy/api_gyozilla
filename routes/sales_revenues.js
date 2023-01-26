/**
 * @swagger
 * components:
 *   schemas:
 *     sales_revenues:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         step:
 *           type: int
 *           description: Le chiffre d'affaire des ventes
 *       example:
 *         ca: 2500000
 */

/**
 * @swagger
 * tags:
 *   name: sales_revenues
 *   description: API pour le chiffre d'affaire des ventes
 * /api/sales_revenues:
 *   post:
 *     summary: Créer le chiffre d'affaire des ventes
 *     tags: [sales_revenues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/sales_revenues'
 *     responses:
 *       200:
 *         description: le chiffre d'affaire des ventes est créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sales_revenues'
 *       500:
 *         description: Une erreur est survenue.
 * /api/sales_revenues/{id}:
 *   get:
 *     summary: Récupérer le chiffre d'affaire des ventes par l'id
 *     tags: [sales_revenues]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: le chiffre d'affaire des ventes par l'id
 *     responses:
 *       200:
 *         description: le chiffre d'affaire des ventes par l'id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/sales_revenues'
 *       404:
 *         description: Les étapes n'ont pas été trouvé.
 *   delete:
 *     summary: Supprimer les étapes d'une recette par son id
 *     tags: [sales_revenues]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id des étapes d'une recette
 *     responses:
 *       200:
 *         description: Les étapes d'une recette a été supprimé.
 *       404:
 *         description: Les étapes d'une recette n'a pas été trouvé.
 */

const express = require('express')
const router = express.Router()
const sale_revenueController = require('../controllers/sales_revenuesController')
const { verifyToken } = require("../controllers/tokenController");

router.get('/api/sales_revenues/', verifyToken, sale_revenueController.getAllSales_revenues)
router.get('/api/sales_revenues/:id', verifyToken, sale_revenueController.getSale_revenue)
router.post('/api/sales_revenues', verifyToken, sale_revenueController.createSale_revenue)
router.delete('/api/sales_revenues/:id', verifyToken, sale_revenueController.deleteSale_revenue)

module.exports = router
