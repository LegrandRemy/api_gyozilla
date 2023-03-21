'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Status.hasMany(models.Orders, {
        foreignKey: 'id_status',
      })
    }
  }
  Status.init(
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
      modelName: 'Status',
      tableName: 'Status'
    },
  )
  return Status
}
