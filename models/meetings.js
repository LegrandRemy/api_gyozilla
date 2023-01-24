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
      // define association here
    }
  }
  Meetings.init(
    {
      end_hour: DataTypes.STRING,
      start_hour: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Meetings',
    },
  )
  return Meetings
}
