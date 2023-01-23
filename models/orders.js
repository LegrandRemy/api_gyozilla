'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    id_: DataTypes.INTEGER,
    status: DataTypes.STRING,
    payement_at: DataTypes.STRING,
    price: DataTypes.STRING,
    id_steps: DataTypes.INTEGER,
    id_sales_revenues: DataTypes.INTEGER,
    id_users: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};