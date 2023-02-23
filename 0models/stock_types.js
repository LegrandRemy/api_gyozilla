'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Stocks_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Stocks_types.hasMany(models.Stock, {
        foreignKey: 'id_stock_types',
      })
    }
  }
  Stocks_types.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Stocks_types',
      tableName: 'Stocks_Types',
    },
  )
  return Stocks_types
}
