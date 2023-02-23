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
        as: 'franchises',
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
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      id_roles: DataTypes.INTEGER,
      id_franchises: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Employees',
    },
  )
  return Employees
}
