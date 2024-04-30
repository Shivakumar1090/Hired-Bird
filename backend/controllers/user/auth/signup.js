
const bcrypt = require("bcryptjs");
const UserModel = require("../../../db/models/user_model");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const _ = require("lodash");
const { 
    ErrorRespHandler, 
    SuccessRespHandler 
    } = require("../../../utils/response_handler");
const { 
    UserWithEmailExitsMessage, 
    UserRegisterMessage, } = require("../../../utils/messages");


const SignUp = async (req, res) => {
    try {
        let toAddUser = req.body;

        const hasUserEmail = await UserModel.findOne({
            email: toAddUser.email.trim(),
        });

        if (hasUserEmail) {
            return ErrorRespHandler(res, 404, UserWithEmailExitsMessage);
        }

        const hashedPassword = await bcrypt.hash(req.body.password , 12);

        const User = {
            ...toAddUser,
            password: hashedPassword,
        };

        const newUser = await new UserModel(User);

        await newUser.save();

        const token = await jwt.sign({ _id: newUser._id }, JWT_SECRET, { expiresIn: "7d" });

        return SuccessRespHandler(res, 200, UserRegisterMessage, {
            ..._.pick(newUser, ["_id", "name", "email"]),
            token: token,
        });
    } catch (e) {
        return ErrorRespHandler(res, 404, e.message);
    }
};

module.exports = SignUp;