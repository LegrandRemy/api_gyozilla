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
        as: 'stocks',
        foreignKey: 'id',
      })
      Franchises.hasMany(models.Orders, {
        as: 'orders',
        foreignKey: 'id',
      })
    }
  }
  Franchises.init(
    {
      name: {
        type: DataTypes.STRING(50),
        validate: {
          notEmpty: true,
        },
      },
      address: {
        type: DataTypes.STRING(100),
        validate: {
          notEmpty: true,
        },
      },
      phone: {
        type: DataTypes.STRING(20),
        validate: {
          notEmpty: true,
          matches: /^\+?\d{10,}$/,
        },
      },
    },
    {
      sequelize,
      modelName: 'Franchises',
    },
  )
  return Franchises
}
