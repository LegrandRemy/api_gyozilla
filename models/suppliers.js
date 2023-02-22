'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Suppliers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Suppliers.hasMany(models.Stocks_types, {
        as: 'stock_types',
        foreignKey: 'id_suppliers',
      })
    }
  }
  Suppliers.init(
    {
      contact_name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      compagny: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Suppliers',
    },
  )
  return Suppliers
}
