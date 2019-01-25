const Sequelize = require('sequelize');
 
// create the connection to database

const sequelize = new Sequelize('xCreep', 'root', 'root', 
{dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;