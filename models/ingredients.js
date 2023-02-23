'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ingredients.hasMany(models.Stocks, {
        foreignKey: 'id_ingredient',
        as: 'stocks',
      })
    }
  }
  Ingredients.init(
    {
      name: DataTypes.STRING,
      quantity: DataTypes.STRING,
      purchasePrice: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Ingredients',
    },
  )
  return Ingredients
}
