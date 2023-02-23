'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class deliveries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  deliveries.init({
    id_suppliers_orders: DataTypes.INTEGER,
    delivery_date: DataTypes.DATE,
    carrier_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'deliveries',
  });
  return deliveries;
};