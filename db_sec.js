const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'alex',
    'alex',
    '3695',
    {
        host: '88.227.58.26',
        port: '5432',
        dialect: 'postgres'
    },
)
