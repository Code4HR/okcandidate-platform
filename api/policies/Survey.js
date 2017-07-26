'use strict';

const Policy = require('trails-policy');
const Joi = require('joi');
const Boom = require('boom');

const surveyCreateSchema = Joi.object().keys({
    name: Joi.string().min(3),
    startDate: Joi.date().min('now'),
    endDate: Joi.date().min(Joi.ref('startDate')),
    QuestionTypeId: Joi.number().required(),
    regionLimit: Joi.bool()
});

const options = {
    abortEarly: false,
    language: {
        string: {
            min: '!!The survey name should be longer than three characters'
        },
        date: {
            base: '!!This field should contain a date',
            min: '!!This date should be farther in the future'
        },
        any: {
            empty: '!!This field shouldn\'t be empty'
        },
        number: {
            base: '!! A selection is required'
        }
    }
};

/**
 * @module SurveyPolicy
 * @description A policy for working with surveys
 */
module.exports = class SurveyPolicy extends Policy {

    create(request, reply) {
        const record = request.payload;

        Joi.validate(record, surveyCreateSchema, options, (err, result) => {
            if (err) {
                return reply(Boom.badRequest(JSON.stringify(err.details)));
            }
            return reply();
        });
    }

};

