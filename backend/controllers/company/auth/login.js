const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const CompanyModel = require("../../../db/models/company_model");
const {
    ErrorRespHandler,
    SuccessRespHandler,
} = require("../../../utils/response_handler");
const { CompanyNotFoundMessage, InVailPasswordMessage, CompanyLogInMessage } = require("../../../utils/messages");


const CompanySignin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const company = await CompanyModel.findOne({ email });

        if (!company) {
            return ErrorRespHandler(res, 404, CompanyNotFoundMessage);
        }

        const isPasswordSame = await bcrypt.compare(password, company.password);
        
        if (!isPasswordSame) {
            return ErrorRespHandler(res, 404, InVailPasswordMessage);
        }

        const token = await jwt.sign({ _id: company._id }, JWT_SECRET, { expiresIn: "7d" });;

        return SuccessRespHandler(res, 200, CompanyLogInMessage, {
            company,
            token: token,
        });

    } catch (e) {
        return ErrorRespHandler(res, 404, e.message);
    }
};

module.exports = CompanySignin;
