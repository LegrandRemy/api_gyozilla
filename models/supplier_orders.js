'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class SupplierOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SupplierOrders.hasMany(models.Deliveries, {
        as: 'deliveries',
        foreignKey: 'id_suppliers_orders',
      })
    }
  }
  SupplierOrders.init(
    {
      date_order: DataTypes.DATE,
      total_price: DataTypes.INTEGER,
      id_suppliers: DataTypes.INTEGER,
      id_franchises: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'SupplierOrders',
    },
  )
  return SupplierOrders
}
