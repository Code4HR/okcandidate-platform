'use strict';

const Controller = require('trails-controller');
const Boom = require('boom');
const words = require('./words.json');
const _ = require('lodash');
/**
 * @module ResultController
 * @description Candidate match results.
 */
module.exports = class SurveyResultController extends Controller {
    get(request, reply) {
        this.app.services.SurveyResultService
      .get()
      .then(response => {
          reply(response);
      })
      .catch(error => {
          reply(Boom.badRequest('could not get results'));
      });
    }
    create(request, reply) {
        const userData = request.payload || {};
        userData.publicPassPhrase = generatePhrase(3);
        userData.privatePassPhrase = generatePhrase(3);
        this.app.services.SurveyResultService
      .create(userData)
      .then(response => {
          reply(response);
      })
      .catch(error => {
          reply(Boom.badRequest('There was an error creating the Survey.'));
      });
    }
    match(request, reply) {
        const params = request.params;

        this.app.services.SurveyResultService.match(params).then(response => {
            reply(response);
        });
    }
};

function generatePhrase(len) {
    return _.times(len, () => words[_.random(0, words.length - 1)])
    .join('-')
    .toLowerCase();
}
