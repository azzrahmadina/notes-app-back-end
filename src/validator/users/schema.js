/* eslint-disable linebreak-style */
/* eslint-disable indent */

const Joi = require('joi');

const UserPayloadSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    fullname: Joi.string().required()
});

module.exports = { UserPayloadSchema };