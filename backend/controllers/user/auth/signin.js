const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const UserModel = require("../../../db/models/user_model");
const {
    ErrorRespHandler,
    SuccessRespHandler,
} = require("../../../utils/response_handler");
const { UserNotFoundMessage, InVailPasswordMessage, UserLogInMessage } = require("../../../utils/messages");


const SignIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const User = await UserModel.findOne({ email });

        if (!User) {
            return ErrorRespHandler(res, 404, UserNotFoundMessage);
        }

        const isPasswordSame = await bcrypt.compare(password, User.password);
        
        if (!isPasswordSame) {
            return ErrorRespHandler(res, 404, InVailPasswordMessage);
        }

        const token = await jwt.sign({ _id: User._id }, JWT_SECRET, { expiresIn: "7d" });

        return SuccessRespHandler(res, 200, UserLogInMessage, {
            User,
            token: token,
        });

    } catch (e) {
        return ErrorRespHandler(res, 404, e.message);
    }
};

module.exports = SignIn;
