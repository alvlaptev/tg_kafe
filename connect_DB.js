const sequelize = require('./db_sec')

const connect_DB = async () =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('Соединение с БД было успешно установлено')

    }catch (e) {
        console.log('Подключение к бд сломалось', e)
    }
}
module.exports = connect_DB()