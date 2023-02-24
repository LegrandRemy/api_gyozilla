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
      SupplierOrders.belongsTo(models.Suppliers, {
        as: 'suppliers',
        foreignKey: 'id_suppliers',
      })
      SupplierOrders.belongsTo(models.Franchises, {
        as: 'franchises',
        foreignKey: 'id_franchises',
      })
    }
  }
  SupplierOrders.init(
    {
      date_order: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: true,
        },
      },
      total_price: {
        type: DataTypes.DECIMAL(3, 2),
        validate: {
          notEmpty: true,
        },
      },
      id_suppliers: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      id_franchises: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'SupplierOrders',
    },
  )
  return SupplierOrders
}
