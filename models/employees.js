'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employees.hasMany(models.Franchises, {
        foreignKey: 'id_franchises',
      })
      Employees.belongsTo(models.Roles, {
        as: 'roles',
        foreignKey: 'id_roles',
      })
    }
  }
  Employees.init(
    {
      lastname: {
        type: DataTypes.STRING(50),
        validate: {
          notEmpty: true,
        },
      },
      firstname: {
        type: DataTypes.STRING(50),
        validate: {
          notEmpty: true,
        },
      },
      phone: {
        type: DataTypes.STRING(15),
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING(100),
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(50),
        validate: {
          notEmpty: true,
        },
      },
      id_roles: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      id_franchises: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Employees',
    },
  )
  return Employees
}
