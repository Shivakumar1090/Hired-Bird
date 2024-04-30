const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
    university: String,
    grade: Number,
    degree: String,
    specialization: String,
    passedout: Number,
});

const EducationModel = mongoose.model("Education",EducationSchema);
module.exports = EducationModel;