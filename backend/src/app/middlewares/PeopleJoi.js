const Joi = require("joi");
const peopleSchema = {
  query: {},
  body: Joi.object().keys({
    name: Joi.string().required(),
    gender: Joi.string().required(),
    age: Joi.number().required()
  }),
  params: {}
};

module.exports = peopleSchema;
