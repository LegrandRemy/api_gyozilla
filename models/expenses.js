"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Expenses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Expenses.belongsTo(models.ExpenseTypes, {
        as: "expense_types",
        foreignKey: "id_expense_types",
      });
    }
  }
  Expenses.init(
    {
      name: {
        type: DataTypes.STRING(50),
        validate: {
          notEmpty: true,
        },
      },
      id_expense_types: {
        type: DataTypes.INTEGER(),
        validate: {
          notEmpty: true,
        },
      },
      amount: {
        type: DataTypes.INTEGER(),
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Expenses",
    }
  );
  return Expenses;
};
