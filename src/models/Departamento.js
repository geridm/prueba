const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Departamento = sequelize.define('departamento', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    codigo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
    // idUsuarioCreacion
});

module.exports = Departamento;