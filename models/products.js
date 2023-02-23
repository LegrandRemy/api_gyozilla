'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsTo(models.ProductCategories, {
        as: 'productCategory',
        foreignKey: 'id_product_categories',
      })
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.FLOAT,
      creation_steps: DataTypes.STRING,
      id_product_categories: DataTypes.INT,
    },
    {
      sequelize,
      modelName: 'Products',
    },
  )
  return Products
}
