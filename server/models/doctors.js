const {DataTypes} = require('sequelize');
const db = require('../config/db');

const Doctor = db.define('Doctors',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    firstName:{
        type: DataTypes.STRING
    },
    lastName:{
        type: DataTypes.STRING
    },
    department:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    phoneNo:{
        type: DataTypes.STRING
    }
});

module.exports = Doctor;

