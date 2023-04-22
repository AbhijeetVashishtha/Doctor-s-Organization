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
            return res.send({status:"404",message:'No Doctor Found'});;
        }
        return res.send({status:"200",data:doctors});
    }
    catch(err){
        console.log(err);
        return res.send({status:"500",message: 'Not Able to getDoctors'});
    }
}