"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  News.init(
    {
      name: {
        type: DataTypes.STRING(100),
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
      description: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
          matches: /^\+?\d{10,}$/,
        },
      },
    },
    {
      sequelize,
      modelName: "News",
    }
  );
  return News;
};
