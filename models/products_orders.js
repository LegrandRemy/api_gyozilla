'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Products_Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products_Orders.init(
    {
      id_products: DataTypes.INTEGER,
      id_orders: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Products_Orders',
    },
  )
  return Products_Orders
}
