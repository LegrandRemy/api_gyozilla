'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      lastname: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      firstname: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      adress: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      zipcode: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      city: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      hiring_date: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
        },
      },
      salary: {
        type: DataTypes.STRING,
      },
      fidelitypoints: {
        type: DataTypes.STRING,
      },
      id_contract_types: {
        type: DataTypes.INTEGER,
      },
      id_roles: {
        type: DataTypes.INTEGER,
      },
      id_meetings: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Users',
    },
  )
  return Users
}
