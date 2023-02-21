'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Users_Meetings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users_Meetings.belongsTo(models.Users, {
        as: 'users',
        foreignKey: 'id_users',
      })
      Users_Meetings.belongsTo(models.Meetings, {
        as: 'meetings',
        foreignKey: 'id_meetings',
      })
    }
  }
  Users_Meetings.init(
    {
      id_users: DataTypes.INTEGER,
      id_meetings: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Users_Meetings',
      tableName: 'Users_Meetings',
    },
  )
  return Users_Meetings
}
