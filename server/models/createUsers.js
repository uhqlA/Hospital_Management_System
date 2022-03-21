const { DataTypes } = require('sequelize');
const db = require('../config/db');

const User = db.define('Users', {
    idUsers:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    userName:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    idRoles: {
        type: DataTypes.INTEGER,
    
    }
});

module.exports = User;