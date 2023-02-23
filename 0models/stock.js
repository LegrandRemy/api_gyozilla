'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Stock.belongsTo(models.Stocks_types, {
        as: 'stock_types',
        foreignKey: 'id_stock_types',
      })
      Stock.hasMany(models.Stocks_suppliers, {
        foreignKey: 'id_stock',
      })
      Stock.belongsTo(models.Measurement_units, {
        as: 'measurement_units',
        foreignKey: 'id_measurement_units',
      })
    }
  }
  Stock.init(
    {
      label: DataTypes.STRING,
      price: DataTypes.STRING,
      reference: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      id_stock_types: DataTypes.INTEGER,
      id_measurement_units: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Stock',
    },
  )
  return Stock
}
