
const UserModel = require("../../db/models/user_model");
const WorkExpModel = require("../../db/models/userprofile/workexp_model");
const { SuccessRespHandler, ErrorRespHandler } = require("../../utils/response_handler");

const Add_WorkExp = async(req,res) => {
    try{
        const {candidateId} = req.params;

        const newWorkExp = new WorkExpModel(req.body);

        const User = await UserModel.findById(candidateId);
        User.workexp.push(newWorkExp._id);
        
        await UserModel.findByIdAndUpdate(candidateId,User);
        await newWorkExp.save();
        
        return SuccessRespHandler(res);
    } catch(err){
        console.error(err);
        return ErrorRespHandler(res);
    }
}

const Edit_WorkExp = async(req,res) => {
    try{
        const {workexpId} = req.params;
        await WorkExpModel.findByIdAndUpdate(workexpId,req.body);
    
        return SuccessRespHandler(res);
    } catch(err){
        console.error(err);
        return ErrorRespHandler(res);
    }
}

const Delete_WorkExp  = async (req, res) => {
    try {
        const { candidateId, workexpId } = req.params;

        const user = await UserModel.findById(candidateId);
        if (!user) {
            return ErrorRespHandler(res, 404, "User not found");
        }

        user.workexp = user.workexp.filter(work => !work.equals(workexpId));

        await user.save();

        await WorkExpModel.findByIdAndDelete(workexpId);

        return SuccessRespHandler(res, 200, "WorkExp entry deleted successfully");
    } catch (err) {
        console.error("Error deleting WorkExp entry:", err);
        return ErrorRespHandler(res);
    }
};

module.exports = {Add_WorkExp,Edit_WorkExp,Delete_WorkExp};