/**
 * @swagger
 * components:
 *   schemas:
 *     menus:
 *       type: object
 *       required:
 *         -
 *       properties:
 *         id:
 *           type: int
 *           description: L'id de le menu
 *         name:
 *           type: string
 *           description: Le nom de le menu
 *         price:
 *           type: int
 *           description: Prix du menu
 *         image:
 *           type: string
 *           description: Image du menu
 *       example:
 *         id: 1
 *         name: "Menu enfant"
 *         price: 8
 *         image: "menu/Menu-Enfant.webp"
 */

/**
 * @swagger
 * tags:
 *   name: menus
 *   description: API pour lister les menus
 * /api/menus:
 *   get:
 *     summary: Lister tous les menus
 *     tags: [menus]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: int
 *         required: false
 *         description: id du menu
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: nom du menu
 *       - in: query
 *         name: price
 *         schema:
 *           type: int
 *         required: false
 *         description: prix du menu
 *       - in: query
 *         name: image
 *         schema:
 *           type: string
 *         required: false
 *         description: image du menu
 *     responses:
 *       200:
 *         description: La liste de tous les menus
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/menus'
 *   post:
 *     summary: Créer un menu
 *     tags: [menus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/menus'
 *     responses:
 *       200:
 *         description: Le menu est créé.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/menus'
 *       500:
 *         description: Une erreur est survenue.
 * /api/menus/{id}:
 *   get:
 *     summary: Récupérer le menu par l'id
 *     tags: [menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Le menu par l'id
 *     responses:
 *       200:
 *         description: Le menu par l'id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/menus'
 *       404:
 *         description: Le menu n'a pas été trouvé
 *   delete:
 *     summary: Supprimer le menu par son id
 *     tags: [menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de le menu
 *     responses:
 *       200:
 *         description: Le menu a été supprimé.
 *       404:
 *         description: Le menu n'a pas été trouvé.
 */

const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menusController");
const { verifyToken } = require("../controllers/tokenController");

router.get("/api/menus/", menuController.getAllMenus);
router.get("/api/menus/:id", menuController.getMenu);
router.post("/api/menus", verifyToken, menuController.createMenu);
router.delete("/api/menus/:id", verifyToken, menuController.deleteMenu);

module.exports = router;
