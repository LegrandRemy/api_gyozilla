'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ressources_Suppliers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ressources_Suppliers.init(
    {
      id_ressources: DataTypes.INTEGER,
      id_suppliers: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Ressources_suppliers',
      tableName: 'Ressources_Suppliers',
    },
  )
  return Ressources_Suppliers
}
