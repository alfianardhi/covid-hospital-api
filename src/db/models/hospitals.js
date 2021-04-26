'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hospitals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hospitals.init({
    hospital_name: DataTypes.STRING,
    hospital_address: DataTypes.STRING,
    municipalities: DataTypes.STRING,
    district: DataTypes.STRING,
    sub_district: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hospitals',
    underscored: true,
  });
  return hospitals;
};