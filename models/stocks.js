'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Stocks extends Model {
    static associate(models) {
      // association avec la table Franchise avec l'alias "franchise"
      Stocks.belongsTo(models.Franchise, {
        foreignKey: 'id_franchise',
        as: 'franchise',
      })

      // association avec la table Ingredient avec l'alias "ingredient"
      Stocks.belongsTo(models.Ingredients, {
        foreignKey: 'id_ingredient',
        as: 'ingredients',
      })
    }
  }
  Stocks.init(
    {
      id_franchises: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      id_ingredients: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Stocks',
    },
  )
  return Stocks
}
