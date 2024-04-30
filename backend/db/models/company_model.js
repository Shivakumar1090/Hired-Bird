const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
    {
        name: { type: String, required: true, },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        logo: String,
        about: String,
        website: String,
        linkedin: String,
        // jobs: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'job',
        // }],
    },
);

const CompanyModel = mongoose.model("company", CompanySchema);
module.exports = CompanyModel;