const doctorController = require('../Controller/doctorList');

const routes = [
    {
        method: 'GET',
        url: '/getdoctors/:organizationId',
        handler: doctorController.getDoctors
    },
]

module.exports = routes;
