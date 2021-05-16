const Joi = require("@hapi/joi");
const constants = require("../constants/index");

const validateSchema = (data, schema) => {
  const result = Joi.validate(data, schema);
  if (result.error) {
    const errorDetails = result.errorDetails.map((value) => {
      return {
        error: value.message,
        path: value.path,
      };
    });
    return errorDetails;
  }
  return null;
};

module.exports.validateBody = (schema) => {
  return (req, res, next) => {
    let response = { ...constants.defaultServerResponse };
    const error = validateSchema(req.body, schema);
    if (error) {
      // return error as response
    }
    return next();
  };
};

module.exports.validateQueryParams = (schema) => {
  return (req, res, next) => {
    let response = { ...constants.defaultServerResponse };
    const error = validateSchema(req.query, schema);
    if (error) {
      // return error as response
    }
    return next();
  };
};
