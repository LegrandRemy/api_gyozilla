const { Op } = require("sequelize");
const db = require("../models/index");
const Menu = db["Menus"];

exports.getAllMenus = async (req, res) => {
  try {
    const where = {};
    if (req.query.id) {
      where.id = req.query.id;
    }
    if (req.query.name) {
      where.name = req.query.name;
    }
    if (req.query.price) {
      where.price = req.query.price;
    }
    if (req.query.image) {
      where.image = req.query.image;
    }
    const menu = await Menu.findAll({
      where: {
        [Op.and]: [where],
      },
    });
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer les menus",
      error: error.message,
    });
  }
};

exports.getMenu = async (req, res) => {
  try {
    const menu = await Menu.findByPk(req.params.id);
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer le menu",
      error: error.message,
    });
  }
};

exports.createMenu = async (req, res) => {
  try {
    const existingMenu = await Menu.findOne({
      where: {
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
      },
    });

    if (existingMenu) {
      return res.status(400).json({ message: "Le menu existe déjà" });
    }

    const newMenu = await Menu.create(req.body);
    res.status(201).json({ message: "created", data: newMenu });
  } catch (error) {
    res.status(500).json({
      message: "Le menu n'a pas été créée",
      error: error.message,
    });
  }
};

exports.updateMenu = async (req, res) => {
  try {
    const keys = Object.keys(req.body);
    const columns = await Menu.describe();
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
    const oldMenu = await Menu.findByPk(req.params.id);
    const updatedMenu = await Menu.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const newMenu = await Menu.findByPk(req.params.id);
    const updatedProperties = _.omitBy(newMenu.dataValues, (value, key) =>
      _.isEqual(value, oldMenu.dataValues[key])
    );
    const response = _.omit(updatedProperties, ["updatedAt"]);
    res.status(200).json({ message: "Mis à jour", data: response });
  } catch (error) {
    res.status(500).json({
      message: "Le menu n'a pas été mise à jour",
      error: error.message,
    });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    await Menu.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "Le menu a été supprimé",
    });
  } catch (error) {
    res.status(500).json({
      message: "Le menu n'a pas été supprimé",
      error: error.message,
    });
  }
};
