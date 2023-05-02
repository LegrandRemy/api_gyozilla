'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class OrderLines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderLines.belongsTo(models.Orders, {
        as: 'orders',
        foreignKey: 'id',
      })
      OrderLines.belongsTo(models.Products, {
        as: 'products',
        foreignKey: 'id_products',
      })
    }
  }
  OrderLines.init(
    {
      id_orders: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      id_products: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'OrderLines',
    },
  )
  return OrderLines
}
