const doctorController = require('../Controller/doctorList');

const routes = [
    {
        method: 'GET',
        url: '/getdoctors/:orgId',
        handler: doctorController.getDoctors
    },
    {
        method: 'POST',
        url: '/addDoctor',
        handler: doctorController.addDoctor
    }
]

module.exports = routes;
