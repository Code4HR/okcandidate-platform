'use strict';

const Controller = require('trails-controller');
const Boom = require('boom');

module.exports = class QuestionController extends Controller {
    getAll(request, reply) {
        this.app.services.QuestionService.getAll()
        .then(response => {
            reply(response);
        })
        .catch(error => {
            reply(Boom.badRequest('could not get questions'));
        });
    }
};
