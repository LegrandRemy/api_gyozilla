'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ressources extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ressources.init({
    id: DataTypes.INTEGER,
    working: DataTypes.STRING,
    price: DataTypes.STRING,
    reference: DataTypes.STRING,
    id_alerts: DataTypes.INTEGER,
    id_ressources_types: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ressources',
  });
  return Ressources;
};