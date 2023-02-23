'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CustomerRating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CustomerRating.init(
    {
      id_customers: DataTypes.INTEGER,
      id_ratings: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'CustomerRating',
    },
  )
  return CustomerRating
}
