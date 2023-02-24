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
      Suppliers.hasMany(models.SupplierOrders, {
        as: 'supplier_orders',
        foreignKey: 'id_suppliers',
      })
    }
  }
  Suppliers.init(
    {
      name: {
        type: DataTypes.STRING(100),
        validate: {
          notEmpty: true,
          allowNull: false,
        },
      },
      address: {
        type: DataTypes.STRING(100),
        validate: {
          notEmpty: true,
          allowNull: false,
        },
      },
      phone: {
        type: DataTypes.STRING(15),
        validate: {
          notEmpty: true,
          isNumeric: true,
          allowNull: false,
        },
      },
    },
    {
      sequelize,
      modelName: 'Suppliers',
    },
  )
  return Suppliers
}
