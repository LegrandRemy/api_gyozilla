'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Contract_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Contract_types.hasOne(models.Users, {
        as: 'users',
        foreignKey: 'id',
      })
    }
  }
  Contract_types.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Contract_Types',
      tableName: 'Contract_Types',
    },
  )
  return Contract_types
}
