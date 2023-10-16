/**
 * @swagger
 * components:
 *   schemas:
 *     products:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           description: ID du produit
 *         name:
 *           type: string
 *           description: Libellé du produit
 *         description:
 *           type: string
 *           description: Description du produit
 *         image:
 *           type: string
 *           description: Image du produit
 *         price:
 *           type: float
 *           description: Prix du produit
 *         creation_steps:
 *           type: string
 *           description: Etape de création du produit
 *         id_product_categories:
 *           type: int
 *           description: ID de la categorie du produit
 *         id_menus:
 *           type: int
 *           description: ID du menu
 *
 *       example:
 *         id: 1
 *         name: "BigMac"
 *         description: "Onctueux et savoureux"
 *         image: "1.webp"
 *         price: 7.80
 *         creation_steps: "Mettre le fromage sur le pain"
 *         id_product_categories: 1
 *         id_menus: 1
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
 *         description: ID du produit
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Libellé du produit
 *       - in: query
 *         name: description
 *         schema:
 *           type: string
 *         required: false
 *         description: Description du produit
 *       - in: query
 *         name: image
 *         schema:
 *           type: string
 *         required: false
 *         description: Image du produit
 *       - in: query
 *         name: price
 *         schema:
 *           type: float
 *         required: false
 *         description: Prix du produit
 *       - in: query
 *         name: creation_steps
 *         schema:
 *           type: string
 *         required: false
 *         description: Etape de création du produit
 *       - in: query
 *         name: id_product_categories
 *         schema:
 *           type: int
 *         required: false
 *         description: ID de la categorie du produit
 *       - in: query
 *         name: id_menus
 *         schema:
 *           type: int
 *         required: false
 *         description: ID du menu
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
 *        required: true
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
 *         required: true
 *         description: id du produit
 *
 *     responses:
 *       200:
 *         description: Le produit a été supprimé.
 *       404:
 *         description: Le produit n'a pas été trouvé.
 */

const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");
const { verifyToken } = require("../controllers/tokenController");
const {
  storage,
  fileSizeFilter,
  fileTypeFilter,
} = require("../middlewares/upload");
const multer = require("multer");

const upload = multer({
  storage: storage,
  fileSizer: fileSizeFilter,
  fileType: fileTypeFilter,
});

router.get("/api/products", productController.getAllProducts);
router.get(
  "/api/products/category/:categoriesId",
  productController.getProductByCategories
);
router.get("/api/products/menu/:menuId", productController.getProductByMenu);
router.get("/api/products/lastProduct", productController.getLastProducts);
router.get("/api/products/:id", productController.getProduct);
router.post(
  "/api/products",
  verifyToken,
  upload.single("image"),
  productController.createProduct
);
router.patch("/api/products/:id", verifyToken, productController.updateProduct);
router.delete(
  "/api/products/:id",
  verifyToken,
  productController.deleteProduct
);

module.exports = router;
