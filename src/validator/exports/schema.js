/* eslint-disable linebreak-style */
/* eslint-disable indent */
const Joi = require('joi');

const ExportNotesPayloadSchema = Joi.object({
    targetEmail: Joi.string().email({ tlds: true }).required(),
});

module.exports = ExportNotesPayloadSchema;