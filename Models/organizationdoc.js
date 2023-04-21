const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const DoctorsByOrganization = sequelize.define('DoctorsByOrganization', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
})

module.exports = DoctorsByOrganization;