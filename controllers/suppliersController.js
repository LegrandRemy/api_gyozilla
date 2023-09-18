const db = require("../models/index");
const Supplier = db["Suppliers"];
const _ = require("lodash");
const { Op } = require("sequelize");

exports.getAllSuppliers = async (req, res) => {
  try {
    const where = {};
    if (req.query.id) {
      where.id = req.query.id;
    }
    if (req.query.name) {
      where.name = req.query.name;
    }
    if (req.query.address) {
      where.address = req.query.address;
    }
    if (req.query.phone) {
      where.phone = req.query.phone;
    }
    const supplier = await Supplier.findAll({
      where: {
        [Op.and]: [where],
      },
    });
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer les fournisseurs !",
      error: error.message,
    });
  }
};

exports.getSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer le fournisseur !",
      error: error.message,
    });
  }
};

exports.createSupplier = async (req, res) => {
  try {
    const existingSupplier = await Supplier.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (existingSupplier) {
      return res.status(400).json({ message: "Le fournisseur existe déjà" });
    }

    const newSupplier = await Supplier.create(req.body);
    res.status(201).json({ message: "created", data: newSupplier });
  } catch (error) {
    res.status(500).json({
      message: "Le fournisseur n'a pas été créée",
      error: error.message,
    });
  }
};

exports.updateSupplier = async (req, res) => {
  try {
    const keys = Object.keys(req.body);
    const columns = await Supplier.describe();
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
    const oldSupplier = await Supplier.findByPk(req.params.id);
    const updatedSupplier = await Supplier.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const newSupplier = await Supplier.findByPk(req.params.id);
    const updatedProperties = _.omitBy(newSupplier.dataValues, (value, key) =>
      _.isEqual(value, oldSupplier.dataValues[key])
    );
    const response = _.omit(updatedProperties, ["updatedAt"]);
    res.status(200).json({ message: "Mis à jour", data: response });
  } catch (error) {
    res.status(500).json({
      message: "Le fournisseur n'a pas été mis à jour",
      error: error.message,
    });
  }
};

exports.deleteSupplier = async (req, res) => {
  try {
    await Supplier.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "Le fournisseur a été supprimé !",
    });
  } catch (error) {
    res.status(500).json({
      message: "Le fournisseur n'a pas été supprimé",
      error: error.message,
    });
  }
};
