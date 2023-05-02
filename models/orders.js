'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.belongsTo(models.Status, {
        as: 'status',
        foreignKey: 'id_status',
      })
      Orders.belongsTo(models.Franchises, {
        as: 'franchises',
        foreignKey: 'id_franchises',
      })
      Orders.belongsTo(models.Customers, {
        as: 'customers',
        foreignKey: 'id_customers',
      })
      Orders.hasMany(models.OrderLines, {
        as:'orderLines',
        foreignKey: 'id_orders',
      })
    }
  }
  Orders.init(
    {
      id_customers: {
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
      date_order: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: true,
        },
      },
      total_price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      id_status: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Orders',
    },
  )
  return Orders
}
