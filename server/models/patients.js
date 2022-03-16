const {DataTypes} = require('sequelize');
const db = require('../config/db');
const Employee = require('./employees')

const Patient = db.define('Patients', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING
    },
    DOB: {
        type: DataTypes.DATE
    },
    address:{
        type: DataTypes.STRING
    },
    gender:{
        type: DataTypes.BOOLEAN
    },
    idEmployee:{
        type: DataTypes.INTEGER
    }
})

Patient.belongsTo(Employee, {foreignKey: 'idEmployee', targetKey: 'id'});

module.exports = Patient