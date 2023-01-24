'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ratings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ratings.init(
    {
      step_visual: DataTypes.STRING,
      step_quality: DataTypes.STRING,
      step_taste: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Ratings',
    },
  )
  return Ratings
}
