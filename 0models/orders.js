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
    }
  }
  Orders.init(
    {
      payement_at: DataTypes.STRING,
      price: DataTypes.STRING,
      id_status: DataTypes.STRING,
      id_users: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Orders',
    },
  )
  return Orders
}
