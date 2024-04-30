const JobModel = require("../../db/models/job_model");

const Get_Job_Detail = async(req,res) => {
    try{
        const {jobId} = req.params;
        const job = JobModel.findById(jobId).populate("comapny").populate("applications");
        return SuccessRespHandler(res,200,"Success",job);
    }catch(err){
        console.error(err);
        return ErrorRespHandler(res);
    }
}

const Applyjob = async(req,res) => {
    try{
        const {candidateId,jobId} = req.params;

        const job = await JobModel.findById(jobId);
        job.applications.push(candidateId);
        
        await JobModel.findByIdAndUpdate(jobId,job);

        return SuccessRespHandler(res,200,"Success",job);
    }catch(err){
        console.error(err);
        return ErrorRespHandler(res);
    }
}

module.exports = {Get_Job_Detail};