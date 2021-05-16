const constants = require("../constants/index");
const jwt = require("jsonwebtoken");
const { response } = require("express");

module.exports.validateToken = (req, res, next) => {
  try {
    let response = { ...constants.defaultServerResponse };
    if (!req.headers.authorization) {
      throw new Error(constants.requestValidationMessage.TOKEN_MISSING);
    }
    const token = req.headers.authorization.split("Bearer")[1].trim();
    const decoded = jwt.verify(token, process.env.SECRET_KEY || "yolo");
    return next();
  } catch (error) {
    console.log(error);
    response.message = error.message;
    response.status = 401;
  }
  return res.status(response.status).send(response);
};
