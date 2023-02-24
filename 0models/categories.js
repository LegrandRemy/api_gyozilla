'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categories.hasMany(models.Product_categories, {
        as: 'productCategory',
        foreignKey: 'id_categories',
      })
    }
  }
  Categories.init(
    {
      name: DataTypes.STRING,
      id_product: {
        type: DataTypes.INTEGER,
        validate: {
          isNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Categories',
      tableName: 'Categories',
    },
  )
  return Categories
}