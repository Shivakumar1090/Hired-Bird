const mongoose = require("mongoose");

const WorkExpSchema = new mongoose.Schema({
    company: String,
    title: String,
    startDate: Date,
    endDate: Date,
    desc: String,
    skills: [String],
});

const WorkExpModel = mongoose.model("WorkExp",WorkExpSchema);
module.exports = WorkExpModel;