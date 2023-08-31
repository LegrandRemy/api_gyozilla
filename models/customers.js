"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customers.hasMany(models.Orders, {
        as: "orders",
        foreignKey: "id_customers",
      });
    }
  }
  Customers.init(
    {
      lastname: {
        type: DataTypes.STRING(50),
        validate: {
          notEmpty: true,
        },
      },
      firstname: {
        type: DataTypes.STRING(50),
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING(100),
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(160),
        validate: {
          notEmpty: true,
        },
      },
      fidelityPoints: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: false,
        },
      },
      is_verified: {
        type: DataTypes.BOOLEAN,
        validate: {
          notEmpty: false,
        },
      },
    },
    {
      sequelize,
      modelName: "Customers",
    }
  );
  return Customers;
};
