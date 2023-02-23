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
      Products.belongsTo(models.Product_categories, {
        as: 'productCategory',
        foreignKey: 'id',
      })
    }
  }
  Products.init(
    {
      label: DataTypes.STRING,
      price: DataTypes.STRING,
      reference: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Products',
    },
  )
  return Products
}
