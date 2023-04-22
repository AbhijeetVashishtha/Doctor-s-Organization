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
    },
    {
        method: 'PUT',
        url: '/editOrg/:orgId',
        handler: orgController.editOrg
    }
];

module.exports = routes;