"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductCategories.hasMany(models.Products, {
        foreignKey: "id_product_categories",
      });
    }
  }
  ProductCategories.init(
    {
      name: {
        type: DataTypes.STRING(50),
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "ProductCategories",
    }
  );
  return ProductCategories;
};
