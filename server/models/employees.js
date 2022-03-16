const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Employee = db.define ('Employees', {
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
    email:{
        type: DataTypes.STRING
    },
    phoneNo:{
        type: DataTypes.STRING
    }
});

module.exports = Employee;