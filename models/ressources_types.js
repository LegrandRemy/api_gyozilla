'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ressources_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ressources_types.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ressources_types',
  });
  return Ressources_types;
};