const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profilepic: String,
        about: String,
        github: String,
        linkedin: String,
        skills: [String],
        resume: String,
        education: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Education',
        }],
        workexp: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'WorkExp',
        }],
        projects: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Projects',
        }]
    },
);

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;