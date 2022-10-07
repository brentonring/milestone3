'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Favorite.init({
    favoriteId: {
      allowNull: false,
      type:  DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true     
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false      
    },
    authors: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    }
    }, {
    sequelize,
    underscored: true,
    modelName: 'Favorite',
    tableName: 'favorites'
  });
  return Favorite;
};