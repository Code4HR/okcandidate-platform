'use strict';

const Policy = require('trails-policy');
const Joi = require('joi');
const Boom = require('boom');

const surveyCreateSchema = Joi.object().keys({
    name: Joi.string().min(3),
    startDate: Joi.date().min('now'),
    endDate: Joi.date().min(Joi.ref('startDate')),
    QuestionTypeId: Joi.number(),
    regionLimit: Joi.bool()
});

/**
 * @module SurveyPolicy
 * @description A policy for working with surveys
 */
module.exports = class SurveyPolicy extends Policy {

    create(request, reply) {
        const record = request.payload;

        Joi.validate(record, surveyCreateSchema, (err, result) => {
            if (err) {
                return reply(Boom.badData(err));
            }
            return reply();
        });
    }

};

