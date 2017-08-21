'use strict';

const Policy = require('trails-policy');
const Joi = require('joi');
const Boom = require('boom');

const customJoi = Joi.extend((Joi) => ({
    base: Joi.string(),
    name: 'string',
    rules: [
        {
            name: 'phone',
            validate(params, value, state, options) {
                const phone = value.replace(/\D/g, '');
                if (phone.length === 10) {
                    return value;
                }
            }
        }
    ]
}));

const electionReminderSchema = Joi.object().keys({
    email: Joi
        .when('newsletter', {
            is: true,
            then: Joi.string().email().required(),
            otherwise: Joi.string().email()
        }),
    phone: customJoi.string().phone(),
    name: Joi
        .when('newsletter', {
            is: true,
            then: Joi.string().required(),
            otherwise: Joi.string()
        }),
    newsletter: Joi.boolean()
}).or('email', 'phone');

const options = {
    abortEarly: false,
    language: {
    }
};

/**
 * @module SurveyResultPolicy
 * @description A policy for working with surveys
 */
module.exports = class SurveyPolicy extends Policy {

    electionReminder(request, reply) {
        const record = request.payload;

        Joi.validate(record, electionReminderSchema, options, (err, result) => {
            if (err) {
                return reply(Boom.badRequest(JSON.stringify(err.details)));
            }
            request.payload = result;
            return reply();
        });
    }

};

