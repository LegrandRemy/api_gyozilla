const { Op } = require("sequelize");
const db = require("../models/index");
const ExpenseTypes = db["ExpenseTypes"];
const _ = require("lodash");

exports.getAllExpenseTypes = async (req, res) => {
  try {
    const where = {};
    if (req.query.id) {
      where.id = req.query.id;
    }
    if (req.query.name) {
      where.name = req.query.name;
    }
    const orderType = await ExpenseTypes.findAll({
      where: {
        [Op.and]: [where],
      },
    });
    res.status(200).json(orderType);
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer les types dépenses",
      error: error.message,
    });
  }
};

exports.getExpenseType = async (req, res) => {
  try {
    const orderType = await ExpenseTypes.findByPk(req.params.id);
    res.status(200).json(orderType);
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer le type de dépense",
      error: error.message,
    });
  }
};

exports.createExpenseType = async (req, res) => {
  try {
    const newExpenseType = await ExpenseTypes.create(req.body);
    res.status(201).json({ message: "created", data: newExpenseType });
  } catch (error) {
    res.status(500).json({
      message: "Le type de dépense pas été créée",
      error: error.message,
    });
  }
};

exports.createExpenseType = async (req, res) => {
  try {
    const existingExpenseType = await ExpenseTypes.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (existingExpenseType) {
      return res
        .status(400)
        .json({ message: "Le type de dépense existe déjà" });
    }

    const newExpenseType = await ExpenseTypes.create(req.body);
    res.status(201).json({ message: "created", data: newExpenseType });
  } catch (error) {
    res.status(500).json({
      message: "Le type de dépense n'a pas été créée",
      error: error.message,
    });
  }
};

exports.deleteExpenseType = async (req, res) => {
  try {
    await ExpenseTypes.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "Le type de dépense a été supprimé",
    });
  } catch (error) {
    res.status(500).json({
      message: "Le type de dépense n'a pas été supprimé",
      error: error.message,
    });
  }
};
