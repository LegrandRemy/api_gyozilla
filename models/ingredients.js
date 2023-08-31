"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ingredients.hasMany(models.Stocks, {
        foreignKey: "id_ingredients",
        as: "stocks",
      });
      Ingredients.hasOne(models.UnitOfMeasures, {
        foreignKey: "id_unitOfMeasure",
        as: "unitofmeasure",
      });
    }
  }
  Ingredients.init(
    {
      name: {
        type: DataTypes.STRING(50),
        validate: {
          notEmpty: true,
        },
      },
      purchasePrice: {
        type: DataTypes.FLOAT(6, 2),
        validate: {
          notEmpty: true,
        },
      },
      id_unitOfMeasures: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Ingredients",
    }
  );
  return Ingredients;
};
