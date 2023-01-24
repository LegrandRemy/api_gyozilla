'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Measurement_Units extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Measurement_Units.init(
    {
      unity: DataTypes.STRING,
      id_ressources: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Measurement_Units',
    },
  )
  return Measurement_Units
}
