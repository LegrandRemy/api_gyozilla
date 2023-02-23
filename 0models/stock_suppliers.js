'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Stocks_Suppliers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Stocks_Suppliers.belongsTo(models.Suppliers, {
        as: 'suppliers',
        foreignKey: 'id_suppliers',
      })
      Stocks_Suppliers.belongsTo(models.Stock, {
        foreignKey: 'id_stock',
      })
    }
  }
  Stocks_Suppliers.init(
    {
      id_stock: DataTypes.INTEGER,
      id_suppliers: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Stocks_suppliers',
      tableName: 'Stocks_Suppliers',
    },
  )
  return Stocks_Suppliers
}
