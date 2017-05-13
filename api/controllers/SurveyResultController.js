'use strict';

const Controller = require('trails-controller');
const Boom = require('boom');

/**
 * @module ResultController
 * @description Candidate match results.
 */
module.exports = class SurveyResultController extends Controller {
    get(request, reply) {
        this.app.services.SurveyResultService.get()
        .then(response => {
            reply(response);
        })
        .catch(error => {
            reply(Boom.badRequest('could not get results'));
        });
    }

    match(request, reply) {

        const id = request.params.id;

        this.app.services.SurveyResultService.match(id)
        .then(response => {
            reply(response);
        });
    }
};
