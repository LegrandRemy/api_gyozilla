const db = require("../models/index");
const Hirings = db["Hirings"];
const _ = require("lodash");
const { Op } = require("sequelize");

exports.getAllHirings = async (req, res) => {
  try {
    const where = {};
    if (req.query.id) {
      where.id = req.query.id;
    }
    if (req.query.name) {
      where.name = req.query.name;
    }
    if (req.query.city) {
      where.city = req.query.city;
    }
    if (req.query.description) {
      where.description = req.query.description;
    }
    const hiring = await Hirings.findAll({
      attributes: [
        "id",
        "name",
        "city",
        "description",
        "createdAt",
        "updatedAt",
      ],
      where: {
        [Op.and]: [where],
      },
    });
    res.status(200).json(hiring);
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer les recrutements",
      error: error.message,
    });
  }
};

exports.getHirings = async (req, res) => {
  try {
    const hiring = await Hirings.findByPk(req.params.id, {
      attributes: [
        "id",
        "name",
        "city",
        "description",
        "createdAt",
        "updatedAt",
      ],
    });
    if (hiring) {
      res.status(200).json(hiring);
    } else {
      res.status(404).json({
        message: "Aucun recrutement n'a été trouvée.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer le recrutement'",
      error: error.message,
    });
  }
};

exports.createHirings = async (req, res) => {
  try {
    const existingHirings = await Hirings.findOne({
      where: {
        name: req.body.name,
        city: req.body.city,
        description: req.body.description,
      },
    });

    if (existingHirings) {
      return res.status(400).json({ message: "Le recrutement existe déjà" });
    }

    const newHirings = await Hirings.create(req.body);
    res.status(201).json({ message: "created", data: newHirings });
  } catch (error) {
    res.status(500).json({
      message: "Le recrutement n'a pas été créée",
      error: error.message,
    });
  }
};

exports.updateHirings = async (req, res) => {
  try {
    const keys = Object.keys(req.body);
    const columns = await Hirings.describe();
    const invalidFields = [];
    for (let i = 0; i < keys.length; i++) {
      if (!columns.hasOwnProperty(keys[i])) {
        invalidFields.push(keys[i]);
      }
    }
    if (invalidFields.length) {
      return res.status(400).json({
        message: `Le ou les champs qui n'existent pas : ${invalidFields.join(
          ", "
        )}`,
      });
    }
    const oldHirings = await Hirings.findByPk(req.params.id, {
      attributes: [
        "id",
        "name",
        "city",
        "description",
        "createdAt",
        "updatedAt",
      ],
    });
    const updatedHirings = await Hirings.update(req.body, {
      attributes: [
        "id",
        "name",
        "city",
        "description",
        "createdAt",
        "updatedAt",
      ],
      where: {
        id: req.params.id,
      },
    });
    const newHirings = await Hirings.findByPk(req.params.id, {
      attributes: [
        "id",
        "name",
        "city",
        "description",
        "createdAt",
        "updatedAt",
      ],
    });
    const updatedProperties = _.omitBy(newHirings.dataValues, (value, key) =>
      _.isEqual(value, oldHirings.dataValues[key])
    );
    const response = _.omit(updatedProperties, ["updatedAt"]);
    res.status(200).json({
      message: "Mise à jour",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Le recrutement n'a pas été mise à jour",
      error: error.message,
    });
  }
};

exports.deleteHirings = async (req, res) => {
  try {
    await Hirings.destroy({
      where: {
        id: req.params.id,
        o,
      },
    });
    res.status(200).json({
      message: "Le recrutement a été supprimée",
    });
  } catch (error) {
    res.status(500).json({
      message: "Le recrutement n'a pas été supprimée",
      error: error.message,
    });
  }
};
