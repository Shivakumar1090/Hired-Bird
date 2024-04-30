const SuccessRespHandler = (res, status = 200, message = "Success", data = null) => {
    return res.status(status).send({ message: message, data: data });
};

const ErrorRespHandler = (res, status = 404, message) => {
    return res.status(status).send({ message: message });
};

module.exports = {SuccessRespHandler,ErrorRespHandler};