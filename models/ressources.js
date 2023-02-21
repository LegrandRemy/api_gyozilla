'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ressources extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ressources.belongsTo(models.Ressources_types, {
        as: 'ressources_types',
        foreignKey: 'id_ressources_types',
      })
      Ressources.hasMany(models.Ressources_suppliers, {
        foreignKey: 'id_ressources',
      })
      Ressources.belongsTo(models.Measurement_units, {
        as: 'measurement_units',
        foreignKey: 'id_measurement_units',
      })
    }
  }
  Ressources.init(
    {
      label: DataTypes.STRING,
      price: DataTypes.STRING,
      reference: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      id_ressources_types: DataTypes.INTEGER,
      id_measurement_units: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Ressources',
    },
  )
  return Ressources
}
