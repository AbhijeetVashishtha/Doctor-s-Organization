const orgController = require('../Controller/Organization');

const routes = [
    {
        method: 'POST',
        url: '/addOrg',
        handler: orgController.addOrg
    },
    {
        method: 'GET',
        url: '/getAllOrg',
        handler: orgController.getAllOrg
    }
];

module.exports = routes;