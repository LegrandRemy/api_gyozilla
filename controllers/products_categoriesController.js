const db = require("../models/index");
const ProductsCategories = db["ProductCategories"];
const { Op } = require("sequelize");
const fs = require("fs");
const _ = require("lodash");

exports.getAllProductsCategories = async (req, res) => {
  try {
    const where = {};
    if (req.query.id) {
      where.id = req.query.id;
    }
    if (req.query.name) {
      where.name = req.query.name;
    }
    const productsCategories = await ProductsCategories.findAll({
      where: {
        [Op.and]: [where],
      },
    });
    res.status(200).json(productsCategories);
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer les categories produits",
      error: error.message,
    });
  }
};

exports.getProductCategorie = async (req, res) => {
  try {
    const product = await ProductsCategories.findByPk(req.params.id, {});
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({
        message: "Aucun produit n'a été trouvé.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer les categories des produits",
      error: error.message,
    });
  }
};

exports.createProductCategorie = async (req, res) => {
  try {
    if (req.body.date_order === undefined) {
      req.body.date_order = new Date();
    }
    const existingProductCategorie = await ProductsCategories.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (existingProductCategorie) {
      return res
        .status(400)
        .json({ message: "La catégorie de produit existe déjà" });
    }

    const newProductCategorie = await ProductsCategories.create(req.body);
    res.status(201).json({ message: "created", data: newProductCategorie });
  } catch (error) {
    res.status(500).json({
      message: "La catégorie de produit n'a pas été créée",
      error: error.message,
    });
  }
};

exports.updateProductCategorie = async (req, res) => {
  try {
    const keys = Object.keys(req.body);
    const columns = await ProductsCategories.describe();
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
    const oldProductCategories = await ProductsCategories.findByPk(
      req.params.id
    );
    const updatedProductCategories = await ProductsCategories.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const newProductCategories = await ProductsCategories.findByPk(
      req.params.id
    );
    const updatedProperties = _.omitBy(newProductCategories, (value, key) =>
      _.isEqual(value, oldProductCategories[key])
    );
    const response = _.omit(updatedProperties, ["updatedAt"]);
    res.status(200).json({ message: "Mis à jour", data: response });
  } catch (error) {
    res.status(500).json({
      message: "Le produit n'a pas été mis à jour",
      error: error.message,
    });
  }
};

exports.deleteProductCategorie = async (req, res) => {
  try {
    await ProductsCategories.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "Le produit a été supprimé",
    });
  } catch (error) {
    res.status(500).json({
      message: "Le produit n'a pas été supprimé",
      error: error.message,
    });
  }
};
