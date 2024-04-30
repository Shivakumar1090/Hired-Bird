
const UserModel = require("../../db/models/user_model");
const ProjectModel = require("../../db/models/userprofile/projects_model");
const { SuccessRespHandler, ErrorRespHandler } = require("../../utils/response_handler");

const Add_Project = async(req,res) => {
    try{
        const candidateId = req.params.candidateId;

        const newProject = new ProjectModel(req.body);

        const User = await UserModel.findById(candidateId);
        User.projects.push(newProject._id);
        
        await UserModel.findByIdAndUpdate(candidateId,User);
        await newProject.save();
        
        return SuccessRespHandler(res);
    } catch(err){
        console.error(err);
        return ErrorRespHandler(res);
    }
}

const Edit_Project = async(req,res) => {
    try{
        const {projectId} = req.params;
        await ProjectModel.findByIdAndUpdate(projectId,req.body);
    
        return SuccessRespHandler(res);
    } catch(err){
        console.error(err);
        return ErrorRespHandler(res);
    }
}

const Delete_Project  = async (req, res) => {
    try {
        const { candidateId, projectId } = req.params;

        const user = await UserModel.findById(candidateId);
        if (!user) {
            return ErrorRespHandler(res, 404, "User not found");
        }

        user.projects = user.projects.filter(proj => !proj.equals(projectId));

        await user.save();

        await ProjectModel.findByIdAndDelete(projectId);

        return SuccessRespHandler(res, 200, "Project entry deleted successfully");
    } catch (err) {
        console.error("Error deleting Project entry:", err);
        return ErrorRespHandler(res);
    }
};

module.exports = {Add_Project,Edit_Project,Delete_Project};