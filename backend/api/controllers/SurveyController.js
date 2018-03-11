'use strict';

const Controller = require('trails-controller');
const Boom = require('boom');

/**
 * @module SurveyController
 * @description Survey controller.
 */
module.exports = class SurveyController extends Controller {

    create(request, reply) {
        const record = request.payload;
        return this.app.orm.Survey.create(record)
        .then((record) => {
            return reply(record);
        })
        .catch((error) => {
            return reply(Boom.badRequest(error));
        });
    }

    getSurveyByLatLng(request, reply) {

        const coordinates = JSON.parse(request.query.coordinates);

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

