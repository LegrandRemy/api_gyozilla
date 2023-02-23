'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Franchises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Franchises.hasMany(models.Stocks, {
        foreignKey: 'id_franchise',
        as: 'stocks',
      })
    }
  }
  Franchises.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Franchises',
    },
  )
  return Franchises
}
