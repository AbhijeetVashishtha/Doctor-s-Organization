const app = require('fastify')({
    logger: true
});
const sequelize = require('./util/database');
const cors = require('fastify-cors');
require('dotenv').config();

const doctorRoutes = require('./Routes/DoctorsList');
const orgRoutes = require('./Routes/addOrg');

app.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

const Doctor = require('./Models/doctors');
const Organization = require('./Models/organization');
const DoctorsByOrganization = require('./Models/organizationdoc');

doctorRoutes.forEach((route, index)=>{
    app.route(route);
});

orgRoutes.forEach((route, index)=>{
    app.route(route);
});


Doctor.belongsToMany(Organization, { through: DoctorsByOrganization });
Organization.belongsToMany(Doctor, { through: DoctorsByOrganization });

sequelize.sync()
.then(() => {
    app.listen({port: process.env.PORT || 3000});
})
.catch((err) => {
    console.log(err);
});
