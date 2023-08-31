const { Op } = require("sequelize");
const db = require("../models/index");
const Ingredient = db["Ingredients"];

exports.getAllIngredients = async (req, res) => {
  try {
    const where = {};
    if (req.query.id) {
      where.id = req.query.id;
    }
    if (req.query.name) {
      where.name = req.query.name;
    }
    if (req.query.quantity) {
      where.quantity = req.query.quantity;
    }
    if (req.query.purchasePrice) {
      where.purchasePrice = req.query.purchasePrice;
    }
    const ingredient = await Ingredient.findAll({
      where: {
        [Op.and]: [where],
      },
      include: ["unitofmeasure"],
    });
    res.status(200).json(ingredient);
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer les ingredients",
      error: error.message,
    });
  }
};

exports.getIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findByPk(req.params.id);
    res.status(200).json(ingredient);
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer l'ingrédient",
      error: error.message,
    });
  }
};

exports.createIngredient = async (req, res) => {
  try {
    const existingIngredient = await Ingredient.findOne({
      where: {
        name: req.body.name,
        quantity: req.body.quantity,
        purchasePrice: req.body.purchasePrice,
      },
    });

    if (existingIngredient) {
      return res.status(400).json({ message: "L'ingrédient existe déjà" });
    }

    const newIngredient = await Ingredient.create(req.body);
    res.status(201).json({ message: "created", data: newIngredient });
  } catch (error) {
    res.status(500).json({
      message: "L'ingrédient n'a pas été créée",
      error: error.message,
    });
  }
};

exports.updateIngredient = async (req, res) => {
  try {
    const updatedIngredient = await Ingredient.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Mis à jour", data: updatedIngredient });
  } catch (error) {
    res.status(500).json({
      message: "L'ingrédient n'a pas été mise à jour",
      error: error.message,
    });
  }
};

exports.deleteIngredient = async (req, res) => {
  try {
    await Ingredient.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "L'ingrédient a été supprimé",
    });
  } catch (error) {
    res.status(500).json({
      message: "L'ingrédient n'a pas été supprimé",
      error: error.message,
    });
  }
};

exports.updateIngredient = async (req, res) => {
  try {
    const updatedIngredient = await Ingredient.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Mis à jour", data: updatedIngredient });
  } catch (error) {
    res.status(500).json({
      message: "L'ingrédient n'a pas été mise à jour",
      error: error.message,
    });
  }
};
