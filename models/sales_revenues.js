'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales_Revenues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sales_Revenues.init({
    id: DataTypes.INTEGER,
    ca: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sales_Revenues',
  });
  return Sales_Revenues;
};