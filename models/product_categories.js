'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Product_Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product_Categories.belongsTo(models.Products, {
        as: 'products',
        foreignKey: 'id_products',
      })
      Product_Categories.belongsTo(models.Categories, {
        as: 'categories',
        foreignKey: 'id_categories',
      })
    }
  }
  Product_Categories.init(
    {
      id_products: DataTypes.INTEGER,
      id_categories: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product_categories',
    },
  )
  return Product_Categories
}
