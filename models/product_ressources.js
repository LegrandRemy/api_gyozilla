'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Ressources extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product_Ressources.init({
    id: DataTypes.INTEGER,
    id_products: DataTypes.INTEGER,
    id_ressources: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product_Ressources',
  });
  return Product_Ressources;
};