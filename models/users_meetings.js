'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Users_meetings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users_meetings.belongsTo(models.Users, {
        as: 'users',
        foreignKey: 'id_users',
      })
      Users_meetings.belongsTo(models.Meetings, {
        as: 'meetings',
        foreignKey: 'id_meetings',
      })
    }
  }
  Users_meetings.init(
    {
      id_users: DataTypes.INTEGER,
      id_meetings: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Users_meetings',
    },
  )
  return Users_meetings
}
