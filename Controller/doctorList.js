const Doctor = require('../Models/doctors');
const Organization = require('../Models/organization');
const DoctorsByOrganization = require('../Models/organizationdoc');

exports.getDoctors = async (req,res) => {
    try{
        const { organizationId } = req.params;
        console.log(organizationId);
        const doctors = await Doctor.findAll({
        include: [{
                model: Organization,
                through: {
                model: DoctorsByOrganization,
                where: { organizationId },
                },
            }],
        });
        if(doctors == 0)
        {
            return res.status(404).send({status:"404",message:'No Doctor Found'});;
        }
        return res.status(200).send({status:"200",data:doctors});
    }
    catch(err){
        console.log(err);
        return res.status(500).send({status:"500",message: 'Not Able to getDoctors'});
    }
};

exports.addDoctor = async (req,res) => {
    try{
        const { orgName, firstName, lastName, email } = req.body;

        // Find organization with the specific ID
        const organization = await Organization.findOne({ where: { id: orgName } });
        if (!organization) {
        return res.status(404).send({status:"404", message: `Organization with ID ${orgName} not found` });
        }

        let doctor = await Doctor.create({ firstname: firstName, lastname: lastName, Email: email });
        let organizationDoc = await DoctorsByOrganization.create({
            organizationId: orgName,
            doctorId: doctor.id,
        });
        return res.send({
            status: "200",
            message: 'Doctor added successfully!',
            doctor: doctor,
            organizationDoc: organizationDoc,
          });
    }
    catch(err){
        console.log(err);
        return res.status(500).send({status:"500", message:"Something went wrong"});
    }
}