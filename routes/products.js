/**
 * @swagger
 * components:
 *   schemas:
 *     products:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: ID du produit
 *         label:
 *           type: string
 *           description: Libellé du produit
 *         price:
 *           type: string
 *           description: Prix du produit
 *         reference:
 *           type: string
 *           description: Reference du produit
 *
 *       example:
 *         id: 1
 *         label: Nems
 *         price: 5€
 *         reference: 884569
 */

/**
 * @swagger
 * tags:
 *   name: products
 *   description: API pour les produits
 * /api/products:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Lister tous les produits
 *     tags: [products]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id du produit
 *       - in: query
 *         name: label
 *         schema:
 *           type: string
 *         required: false
 *         description: libellé du produit
 *       - in: query
 *         name: price
 *         schema:
 *           type: string
 *         required: false
 *         description: prix du produit
 *       - in: query
 *         name: reference
 *         schema:
 *           type: string
 *         required: false
 *         description: reference du produit
 *       - in: query
 *         name: products_categories
 *         schema:
 *           type: string
 *         required: false
 *         description: Categorie du produit
 *     responses:
 *       200:
 *         description: La liste de tous les produits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/products'
 *   post:
 *     summary: Créer un nouveau produit
 *     tags: [products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/products'
 *     responses:
 *       200:
 *         description: Produit créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/products'
 *       404:
 *         description: Une erreur est survenue.
 * /api/products/{id}:
 *   get:
 *     summary: Récupérer le produit par l'id
 *     tags: [products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Produit par l'id
 *     responses:
 *       200:
 *         description: Produit par l'id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/products'
 *       404:
 *         description: Le produit n'a pas été trouvé.
 *   patch:
 *    summary: Mise à jour du produit par son id
 *    tags: [products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: false
 *        description: id du produit
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/products'
 *    responses:
 *      200:
 *        description: Le produit a été mis à jour
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/products'
 *      404:
 *        description: Le produit n'a pas été trouvé.
 *      500:
 *        description: Une erreur est survenue.
 *   delete:
 *     summary: Supprimer un produit par son id
 *     tags: [products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: false
 *         description: id du produit
 *
 *     responses:
 *       200:
 *         description: Le produit a été supprimé.
 *       404:
 *         description: Le produit n'a pas été trouvé.
 */

const express = require('express')
const router = express.Router()
const productController = require('../controllers/productsController')
const { verifyToken } = require('../controllers/tokenController')
const {
  storage,
  fileSizeFilter,
  fileTypeFilter,
} = require('../middlewares/upload')
const multer = require('multer')

const upload = multer({
  storage: storage,
  fileSizer: fileSizeFilter,
  fileType: fileTypeFilter,
})

router.get('/api/products/', verifyToken, productController.getAllProducts)
router.get('/api/products/:id', verifyToken, productController.getProduct)
router.post(
  '/api/products/create',
  verifyToken,
  upload.single('image'),
  productController.createProduct,
)
router.patch('/api/products/:id', verifyToken, productController.updateProduct)
router.delete('/api/products/:id', verifyToken, productController.deleteProduct)

module.exports = router
