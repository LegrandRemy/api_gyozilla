'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_hourlies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users_hourlies.init({
    id_users: DataTypes.INTEGER,
    id_hourlies: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users_hourlies',
  });
  return Users_hourlies;
};