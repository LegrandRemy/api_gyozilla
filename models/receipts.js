'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receipts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Receipts.init({
    id: DataTypes.INTEGER,
    wording: DataTypes.STRING,
    reference: DataTypes.INTEGER,
    id_step: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Receipts',
  });
  return Receipts;
};