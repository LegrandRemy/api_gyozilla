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
      id_franchises: DataTypes.INTEGER,
      id_ingredients: DataTypes.INTEGER,
      quantity: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Stocks',
    },
  )
  return Stocks
}
