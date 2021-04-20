const { Sequelize } = require('sequelize');

module.exports = new Sequelize('heroku_65a01fec70c3703', 'b8eebf70eadba6', '2c8780fc', {
    host: 'eu-cdbr-west-01.cleardb.com',
    dialect: 'mysql'
});

