"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsTo(models.ProductCategories, {
        as: "productCategory",
        foreignKey: "id_product_categories",
      });
      Products.belongsTo(models.Menus, {
        as: "menu",
        foreignKey: "id_menus",
      });
      Products.hasMany(models.OrderLines, {
        as: "orderLines",
        foreignKey: "id_products",
      });
    }
  }
  Products.init(
    {
      name: {
        type: DataTypes.STRING(50),
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
        },
      },
      image: {
        type: DataTypes.STRING(100),
        validate: {
          notEmpty: true,
        },
      },
      price: {
        type: DataTypes.FLOAT(6, 2),
        validate: {
          notEmpty: true,
          isDecimal: true,
        },
      },
      creation_steps: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
        },
      },
      id_product_categories: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      id_menus: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
