const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'gino',
    'postgres',
    '3695',
    {
        host: '127.0.0.1',
        port: '5432',
        dialect: 'postgres'
    },
)
