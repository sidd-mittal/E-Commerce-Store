//deprecated library

const Joi = require("@hapi/joi");
const joi = require("@hapi/joi");

//a library meant to validate the Product Schema to ensure data from the client is sent properly.

module.export.createProductSchema = Joi.object().keys({
  name: Joi.string().required,
  price: Joi.number().required,
  brand: Joi.string().required,
});

module.exports.getAllProductSchema = Joi.object().gets({
  skip: Joi.string(),
  limit: Joi.string(),
});
