/**
 * @swagger
 * components:
 *   schemas:
 *     product_categories:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID de la catégorie de produit
 *         id_products:
 *           type: int
 *           description: ID du produit associé 
 *         id_categories:
 *           type: int
 *           description: ID de la catégorie associée
 *          
 *       example:
 *         id: 1
 *         id_products: 1
 *         id_categories: 1

 *
 */

/**
 * @swagger
 * tags:
 *   name: product_categories
 *   description: API pour les catégories de produit
 * /api/product_categories:
 *   get:
 *     summary: Lister toutes les catégories de produit
 *     tags: [product_categories]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: ID de la catégorie de produit
 *       - in: query
 *         name: id_products
 *         schema:
 *           type: int
 *         required: false
 *         description: ID du produit associé
 *       - in: query
 *         name: id_categories
 *         schema:
 *           type: int
 *         required: false
 *         description: ID de la catégorie associée
 *
 *     responses:
 *       200:
 *         description: La liste de toutes les catégories de produit
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/product_categories'
 *   post:
 *     summary: Créer une nouvelle catégorie de produit
 *     tags: [product_categories]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/product_categories'
 *     responses:
 *       200:
 *         description: La catégorie de produit a été créée'.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product_categories'
 *       404:
 *         description: Une erreur est survenue.
 * /api/product_categories/{id}:
 *   get:
 *     summary: Récupérer la catégorie de produit par l'id
 *     tags: [product_categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: Catégorie de produit par l'id
 *     responses:
 *       200:
 *         description: Catégorie de produit par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product_categories'
 *       404:
 *         description: Le Catégorie de produit n'a pas été trouvée.
 *   patch:
 *    summary: Mise à jour de la catégorie de produit par son id
 *    tags: [product_categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: int
 *        required: true
 *        description: id de la catégorie de produit
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/product_categories'
 *    responses:
 *      200:
 *        description: La catégorie de produit a été mise à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/product_categories'
 *      404:
 *        description: La catégorie de produit n'a pas été trouvée.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer une catégorie de produit par son id
 *     tags: [product_categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: int
 *         required: true
 *         description: id de la catégorie de produit
 *
 *     responses:
 *       200:
 *         description: La catégorie de produit a été supprimée.
 *       404:
 *         description: La catégorie de produit n'a pas été trouvée.
 */

const express = require('express')
const router = express.Router()
const product_categoryController = require('../controllers/product_categoriesController')

router.get(
  '/api/product_categories',
  product_categoryController.getAllProduct_categories,
)
router.get(
  '/api/product_categories/:id',
  product_categoryController.getProduct_category,
)
router.post(
  '/api/product_categories',
  product_categoryController.createProduct_category,
)
router.patch(
  '/api/product_categories/:id',
  product_categoryController.updateProduct_category,
)
router.delete(
  '/api/product_categories/:id',
  product_categoryController.deleteProduct_category,
)

module.exports = router
