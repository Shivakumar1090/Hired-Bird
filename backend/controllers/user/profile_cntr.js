const UserModel = require("../../db/models/user_model");
const { SuccessRespHandler, ErrorRespHandler } = require("../../utils/response_handler");

const Profile = async(req,res) => {
    try{
        const candidateId = req.params.candidateId;
        const User = await UserModel.findById(candidateId).populate("education").populate("projects").populate("workexp");

        return SuccessRespHandler(res,200,"success",User);
    } catch(err){
        console.error(err);
        return ErrorRespHandler(res);
    }
}

module.exports = {Profile};