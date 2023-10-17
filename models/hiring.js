"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hirings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Hirings.init(
    {
      name: {
        type: DataTypes.STRING(100),
        validate: {
          notEmpty: true,
        },
      },
      city: {
        type: DataTypes.STRING(50),
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
          matches: /^\+?\d{10,}$/,
        },
      },
    },
    {
      sequelize,
      modelName: "Hirings",
    }
  );
  return Hirings;
};
