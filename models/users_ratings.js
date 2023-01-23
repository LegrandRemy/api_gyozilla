'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Ratings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users_Ratings.init({
    id: DataTypes.INTEGER,
    id_users: DataTypes.INTEGER,
    id_ratings: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users_Ratings',
  });
  return Users_Ratings;
};