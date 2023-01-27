'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Meetings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Meetings.hasMany(models.Users_meetings, {
        as: 'meetingsUsers',
        foreignKey: 'id_meetings',
      })
    }
  }
  Meetings.init(
    {
      end_hour: DataTypes.DATE,
      start_hour: DataTypes.DATE,
      id_users: {
        type: DataTypes.INTEGER,
        validate: {
          isNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Meetings',
    },
  )
  return Meetings
}
