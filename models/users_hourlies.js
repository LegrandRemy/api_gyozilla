'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Hourlies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users_Hourlies.init({
    id: DataTypes.INTEGER,
    id_users: DataTypes.INTEGER,
    id_hourlies: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users_Hourlies',
  });
  return Users_Hourlies;
};