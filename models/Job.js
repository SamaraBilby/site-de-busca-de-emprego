const Sequelize = require('sequelize');

const db = require('../db/connection');

const Job = db.define('job',{
    title:{
        type: Sequelize.STRING,
    },
    descricao:{
        type: Sequelize.STRING,
    },
    salario: {
        type: Sequelize.STRING,
    },
    empresa: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
    },
    novo: {
        type: Sequelize.INTEGER,
    }  
});

module.exports = Job