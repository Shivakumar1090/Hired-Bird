const CompanyModel = require("../../db/models/company_model");
const { SuccessRespHandler, ErrorRespHandler } = require("../../utils/response_handler");

const CompProfile = async(req,res) => {
    try{
        const {compId} = req.params;
        const company = await CompanyModel.findById(compId).populate("jobs");

        return SuccessRespHandler(res,200,"success",company);
    } catch(err){
        console.error(err);
        return ErrorRespHandler(res);
    }
}

const Edit_CompProfile = async(req,res) => {
    try{
        const {compId} = req.params;
        await CompanyModel.findByIdAndUpdate(compId,req.body);
    
        return SuccessRespHandler(res);
    } catch(err){
        console.error(err);
        return ErrorRespHandler(res);
    }
}

module.exports = {CompProfile,Edit_CompProfile};