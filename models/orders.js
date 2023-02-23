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
      }),
        Orders.belongsTo(models.Franchises, {
          as: 'franchises',
          foreignKey: 'id_franchises',
        }),
        Orders.belongsTo(models.Customers, {
          as: 'customers',
          foreignKey: 'id_customers',
        })
    }
  }
  Orders.init(
    {
      id_customers: DataTypes.INTEGER,
      id_franchises: DataTypes.INTEGER,
      date_order: DataTypes.DATE,
      total_price: DataTypes.INTEGER,
      id_status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Orders',
    },
  )
  return Orders
}
