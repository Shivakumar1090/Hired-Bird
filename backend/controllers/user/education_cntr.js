const EducationModel = require("../../db/models/userprofile/education_model");
const UserModel = require("../../db/models/user_model");
const { SuccessRespHandler, ErrorRespHandler } = require("../../utils/response_handler");

const Add_Education = async(req,res) => {
    try{
        const candidateId = req.params.candidateId;

        const newEducation = new EducationModel(req.body);

        const User = await UserModel.findById(candidateId);
        User.education.push(newEducation._id);
        
        await UserModel.findByIdAndUpdate(candidateId,User);
        await newEducation.save();
        
        return SuccessRespHandler(res);
    } catch(err){
        console.error(err);
        return ErrorRespHandler(res);
    }
}

const Edit_Education = async(req,res) => {
    try{
        const {educationId} = req.params;
        await EducationModel.findByIdAndUpdate(educationId,req.body);
    
        return SuccessRespHandler(res);
    } catch(err){
        console.error(err);
        return ErrorRespHandler(res);
    }
}

const Delete_Education  = async (req, res) => {
    try {
        const { candidateId, educationId } = req.params;

        const user = await UserModel.findById(candidateId);
        if (!user) {
            return ErrorRespHandler(res, 404, "User not found");
        }

        user.education = user.education.filter(edu => !edu.equals(educationId));

        await user.save();

        await EducationModel.findByIdAndDelete(educationId);

        return SuccessRespHandler(res, 200, "Education entry deleted successfully");
    } catch (err) {
        console.error("Error deleting education entry:", err);
        return ErrorRespHandler(res);
    }
};

module.exports = {Add_Education,Edit_Education,Delete_Education};