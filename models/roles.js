'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Roles.hasOne(models.Employees, {
        as: 'employees',
        foreignKey: 'id',
      })
    }
  }
  Roles.init(
    {
      name: {
        type: DataTypes.STRING(50),
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Roles',
    },
  )
  return Roles
}
