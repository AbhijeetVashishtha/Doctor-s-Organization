const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const Organization = sequelize.define('organization', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
       type:  Sequelize.STRING,
       allowNull: true
    }
})

module.exports = Organization;