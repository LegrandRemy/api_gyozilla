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
      Suppliers.hasMany(models.Supplier_orders, {
        as: 'supplier_orders',
        foreignKey: 'id_suppliers',
      })
    }
  }
  Suppliers.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Suppliers',
    },
  )
  return Suppliers
}
