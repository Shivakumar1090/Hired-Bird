const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    {
        title: String,
        desc: String,
        package: Number,
        github: String,
        linkedin: String,
        skills: [String],
        startDate: Date,
        deadline: Date,
        experience: Number,
        applications: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }],
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'company',
        },
        close: {type: Boolean,default: false},
    },
);


const JobModel = mongoose.model("job", JobSchema);
module.exports = JobModel;