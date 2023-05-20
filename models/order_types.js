"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderTypes.belongsTo(models.Orders, {
        as: "orders",
        foreignKey: "id_type_orders",
      });
    }
  }
  OrderTypes.init(
    {
      name: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "OrderTypes",
    }
  );
  return OrderTypes;
};
