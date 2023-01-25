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
      // define association here
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