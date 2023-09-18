"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
class UnitOfMeasures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    UnitOfMeasures.hasMany(models.Ingredients, {
        foreignKey: "id_unitOfMeasure",
        as: "unitofmeasure",
    });
    }
}
UnitOfMeasures.init(
    {
    label: {
        type: DataTypes.STRING(50),
        validate: {
        notEmpty: true,
        },
    },
    },
    {
    sequelize,
    modelName: "UnitOfMeasures",
    }
);
return UnitOfMeasures;
};
