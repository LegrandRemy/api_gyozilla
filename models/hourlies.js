'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hourlies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hourlies.init({
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    id_hourly_types: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hourlies',
  });
  return Hourlies;
};