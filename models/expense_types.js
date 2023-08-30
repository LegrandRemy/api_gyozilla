"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ExpenseTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ExpenseTypes.hasMany(models.Expenses, {
        as: "expenses",
        foreignKey: "id_expense_types",
      });
    }
  }
  ExpenseTypes.init(
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
      modelName: "ExpenseTypes",
    }
  );
  return ExpenseTypes;
};
