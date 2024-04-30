const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    name: String,
    link: String,
    desc: String,
    skills: [String],
});

const ProjectModel = mongoose.model("Projects",ProjectSchema);
module.exports = ProjectModel;