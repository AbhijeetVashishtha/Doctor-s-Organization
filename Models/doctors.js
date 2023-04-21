const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const Doctors = sequelize.define('doctors', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
       type:  Sequelize.STRING,
       allowNull: false,
       unique: true
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
})

module.exports = Doctors;