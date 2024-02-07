const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('user', {
    usuario: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    primerNombre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    segundoNombre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    primerApellido: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    segundoApellido: {
        type: DataTypes.TEXT,
        allowNull: false
    }


});

module.exports = User;