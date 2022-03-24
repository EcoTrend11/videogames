const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type :DataTypes.STRING(2000),//2000 caracteres
      allowNull : false,
    },
    released : {
      type: DataTypes.DATEONLY, //yyyy-mm-dd//
      allowNull: true
    },
    rating : {
      type: DataTypes.STRING,
      allowNull : true
    },
    background_image:{
      type: DataTypes.STRING,
      allowNull: true
    }
  },{
    timestamps : false
  });
};
