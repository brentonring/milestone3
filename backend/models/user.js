'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    userId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
  },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
      },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true
  });
  return User;
};