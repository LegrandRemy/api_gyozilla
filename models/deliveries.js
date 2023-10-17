"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deliveries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Deliveries.belongsTo(models.SupplierOrders, {
        as: "SupplierOrders",
        foreignKey: "id_suppliers_orders",
      });
    }
  }
  Deliveries.init(
    {
      id_suppliers_orders: {
        type: DataTypes.INTEGER,
        validate: {
          // notwNull: false,
        },
      },
      delivery_date: {
        type: DataTypes.DATE,
        validate: {
          // allowNull: false,
        },
      },
      carrier_name: {
        type: DataTypes.STRING(50),
        validate: {
          // noEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Deliveries",
    }
  );
  return Deliveries;
};
