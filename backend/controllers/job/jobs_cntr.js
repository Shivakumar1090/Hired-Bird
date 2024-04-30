
const CompanyModel = require("../../db/models/company_model");
const JobModel = require("../../db/models/job_model");
const { SuccessRespHandler, ErrorRespHandler } = require("../../utils/response_handler");

const Get_Jobs = async(req,res) => {
    try{
        const jobs = JobModel.find().populate("comapny");
        return SuccessRespHandler(res,200,"Success",jobs);
    }catch(err){
        console.error(err);
        return ErrorRespHandler(res);
    }
}

const Add_Job = async(req,res) => {
    try{
        const {compId} = req.params;

        const newJob = new JobModel(req.body);

        const company = await CompanyModel.findById(compId);
        company.jobs.push(newJob._id);
        
        await CompanyModel.findByIdAndUpdate(compId,company);
        await newJob.save();
        
        return SuccessRespHandler(res);
    } catch(err){
        console.error(err);
        return ErrorRespHandler(res);
    }
}

const Edit_Job = async(req,res) => {
    try{
        const {jobId} = req.params;
        await JobModel.findByIdAndUpdate(jobId,req.body);
    
        return SuccessRespHandler(res);
    } catch(err){
        console.error(err);
        return ErrorRespHandler(res);
    }
}

const Delete_Job  = async (req, res) => {
    try {
        const { compId, jobId } = req.params;

        const company = await CompanyModel.findById(compId);
        if (!company) {
            return ErrorRespHandler(res, 404, "company not found");
        }

        company.jobs = company.jobs.filter(job => !job.equals(jobId));

        await company.save();

        await JobModel.findByIdAndDelete(jobId);

        return SuccessRespHandler(res, 200, "Job entry deleted successfully");
    } catch (err) {
        console.error("Error deleting Job entry:", err);
        return ErrorRespHandler(res);
    }
};

module.exports = {Get_Jobs,Add_Job,Edit_Job,Delete_Job};