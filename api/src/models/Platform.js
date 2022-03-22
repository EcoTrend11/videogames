const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('platform', {
        id : {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        platform : {
            type: DataTypes.JSON,
            id : {
                type: DataTypes.STRING,
            },
            name : {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }
      },{
        timestamps : false
      });
    };