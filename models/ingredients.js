'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ingredients extends Model {
    static associate(models) {
      Ingredients.hasMany(models.Stocks, {
        foreignKey: 'id_ingredients',
        as: 'stocks',
      });
      Ingredients.belongsTo(models.UnitOfMeasures, {   // Utilisation de "belongsTo" au lieu de "hasOne"
        foreignKey: 'id_unitOfMeasures',
        as: 'unitOfMeasures',
      });
    }
  }

  Ingredients.init(
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,   // Utilisation de "allowNull" au lieu de "validate"
      },
      purchasePrice: {
        type: DataTypes.FLOAT(6, 2),
        allowNull: false,
      },
      id_unitOfMeasures: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Ingredients',
    }
  );

  return Ingredients;
};
