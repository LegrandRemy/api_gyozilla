'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UnitOfMeasures extends Model {
    static associate(models) {
      UnitOfMeasures.hasMany(models.Ingredients, {
        foreignKey: 'id_unitOfMeasures',
        as: 'ingredients',
      });
    }
  }

  UnitOfMeasures.init(
    {
      label: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'UnitOfMeasures',
      timestamps: true, // Activer les horodateurs
      updatedAt: false, // Désactiver le champ updatedAt si nécessaire
    }
  );

  return UnitOfMeasures;
};
