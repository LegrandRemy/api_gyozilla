'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ressources_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ressources_types.hasMany(models.Ressources, {
        foreignKey: 'id_ressources_types',
      })
    }
  }
  Ressources_types.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Ressources_types',
      tableName: 'Ressources_Types',
    },
  )
  return Ressources_types
}
