const { Sequelize } = require("sequelize");

const db = new Sequelize('Hosp_System', 'thuo', 'Bingiras18', {
    host: 'localhost',
    dialect: 'mysql',
    define:{
        timestamps:false
    }
});

module.exports = db;