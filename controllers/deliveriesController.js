const { Op } = require("sequelize");
const db = require("../models/index");
const Deliveries = db["Deliveries"];
const _ = require("lodash");

exports.getAllDeliveries = async (req, res) => {
  try {
    const where = {};
    if (req.query.id) {
      where.id = req.query.id;
    }
    if (req.query.id_suppliers_orders) {
      where.id_suppliers_orders = req.query.id_suppliers_orders;
    }
    if (req.query.delivery_date) {
      where.delivery_date = req.query.delivery_date;
    }
    if (req.query.carrier_name) {
      where.carrier_name = req.query.carrier_name;
    }
    const deliveries = await Deliveries.findAll({
      where: {
        [Op.and]: [where],
      },
    });
    res.status(200).json(deliveries);
  } catch (error) {
    res.status(500).json({
      message: "Test",
      error: error.message,
    });
  }
};

exports.getDeliveries = async (req, res) => {
  try {
    const deliveries = await Deliveries.findByPk(req.params.id, {
      include: ["SupplierOrders"],
    });
    if (deliveries) {
      res.status(200).json(deliveries);
    } else {
      res.status(404).json({
        message: "Aucune livraison n'a été trouvée.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Impossible de récupérer le deliveries",
      error: error.message,
    });
  }
};

exports.createDeliveries = async (req, res) => {
  try {
    const existingDeliveries = await Deliveries.findOne({
      where: {
        id_suppliers_orders: req.body.id_suppliers_orders,
        delivery_date: req.body.delivery_date,
        carrier_name: req.body.carrier_name,
      },
    });

    if (existingDeliveries) {
      return res.status(400).json({ message: "La livraison existe déjà" });
    }

    const newDeliveries = await Deliveries.create(req.body);
    res.status(201).json({ message: "created", data: newDeliveries });
  } catch (error) {
    res.status(500).json({
      message: "La livraison n'a pas été créée",
      error: error.message,
    });
  }
};

exports.updateDeliveries = async (req, res) => {
  try {
    const keys = Object.keys(req.body);
    const columns = await Deliveries.describe();
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
    const oldDeliveries = await Deliveries.findByPk(req.params.id);
    const updateDeliveries = await Deliveries.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const newDeliveries = await Deliveries.findByPk(req.params.id);
    const updatedProperties = _.omitBy(newDeliveries.dataValues, (value, key) =>
      _.isEqual(value, oldDeliveries.dataValues[key])
    );
    const response = _.omit(updatedProperties, ["updatedAt"]);
    res.status(200).json({ message: "Mis à jour", data: response });
  } catch (error) {
    res.status(500).json({
      message: "La livraison n'a pas été mis à jour",
      error: error.message,
    });
  }
};

exports.deleteDeliveries = async (req, res) => {
  try {
    await Deliveries.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "La livraison a été supprimée",
    });
  } catch (error) {
    res.status(500).json({
      message: "La livraison n'a pas été supprimé",
      error: error.message,
    });
  }
};
