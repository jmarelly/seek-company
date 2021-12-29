const comapniesModel = require('./companyModel');

module.exports.getCompanies = async (req, res, next) => {
    const companyName = req.params.name;
    const response = await comapniesModel.getCompany(companyName);
    res.status(200).json(response.data);
}