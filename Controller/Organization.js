const Organization = require('../Models/organization');

exports.addOrg = async (req,res) => {
    try{
        const { name,address } = req.body;

        if (!name || !address) {
        return res.status(400).json({ message: 'Name and  Address is required' });
        }

        const organization = await Organization.create({ name,address });

        return res.status(200).send({status: "200", organization });
    }
    catch(err){
        console.log(err);
        return res.status(500).send({status:"500", message:"Something went wrong"});
    }
};

exports.getAllOrg = async (req,res) => {
    try{
        const organizations = await Organization.findAll();
        return res.status(200).send({ status: "200", organizations });
    }
    catch(err){
        console.log(err);
        return res.status(500).send({status:"500", message:"Something went wrong"});
    }
}

exports.editOrg = async (req,res) => {
    try{
        const { orgId } = req.params;
        const { name, address } = req.body;
        console.log(orgId);

        const organization = await Organization.update({ name, address }, { where: { id: orgId } });
        return res.status(200).send({ status: 'success', organization });
    }
    catch(err){
        console.log(err);
        return res.status(500).send({status:"500", message:"Something went wrong"});
    }
}