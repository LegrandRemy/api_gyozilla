'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class supplierOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  supplierOrders.init({
    date_order: DataTypes.DATE,
    total_price: DataTypes.INTEGER,
    id_suppliers: DataTypes.INTEGER,
    id_franchises: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'supplierOrders',
  });
  return supplierOrders;
};