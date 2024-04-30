
const bcrypt = require("bcryptjs");
const CompanyModel = require("../../../db/models/company_model");
const _ = require("lodash");
const { 
    ErrorRespHandler, 
    SuccessRespHandler 
    } = require("../../../utils/response_handler");
const { 
    CompanyWithEmailExitsMessage, 
    CompanyRegisterMessage, } = require("../../../utils/messages");

const CompanySignup = async (req, res) => {
    try {
        let toAddCompany = req.body;

        const hasCompanyEmail = await CompanyModel.findOne({
            email: toAddCompany.email.trim(),
        });

        if (hasCompanyEmail) {
            return ErrorRespHandler(res, 404, CompanyWithEmailExitsMessage);
        }

        const hashedPassword = await bcrypt.hash(req.body.password , 20);

        const Company = {
            ...toAddCompany,
            password: hashedPassword,
        };

        const newCompany = await new CompanyModel(Company);
        await newCompany.save();

        const token =  await jwt.sign({ _id: newCompany._id }, JWT_SECRET, { expiresIn: "7d" });

        return SuccessRespHandler(res, 200, CompanyRegisterMessage, {
            ..._.pick(newCompany, ["_id", "name", "email"]),
            token: token,
        });
    } catch (e) {
        return ErrorRespHandler(res, 404, e.message);
    }
};

module.exports = CompanySignup;