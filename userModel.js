const sequelize = require('./db_sec')
const {DataTypes} = require('sequelize')

const User = sequelize.define('User', {
        id: {type: DataTypes.INTEGER, unique: true, autoIncrement: true},
        user_id: {type: DataTypes.BIGINT,primaryKey: true, unique: true},
        name: {type: DataTypes.STRING},
        action: {type: DataTypes.BOOLEAN, defaultValue: false}},

    {
        timestamps:  true,
        updatedAt: false
    }
)

module.exports = User;