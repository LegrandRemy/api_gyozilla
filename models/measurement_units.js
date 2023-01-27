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
      Measurement_Units.hasOne(models.Ressources, {
        as: 'ressources',
        foreignKey: 'id',
      })
    }
  }
  Measurement_Units.init(
    {
      unity: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Measurement_units',
    },
  )
  return Measurement_Units
}
