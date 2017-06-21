'use strict';

const Controller = require('trails-controller');
const Boom = require('boom');

/**
 * @module SurveyController
 * @description Survey controller.
 */
module.exports = class SurveyController extends Controller {

    getSurveyByLatLng(request, reply) {

        const coordinates = request.query.coordinates;

        this.app.services.SurveyService.getSurveyByLatLng(coordinates.latitude,
                                                          coordinates.longitude)
        .then(result => {
            reply(result);
        })
        .catch(error => {
            reply(Boom.badRequest('could not get survey by location'));
        });
    }
};

