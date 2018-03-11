'use strict';

const Service = require('trails-service');

/**
 * @module SurveyService
 * @description Survey service
 */
module.exports = class SurveyService extends Service {

    getSurveyByLatLng(lat, lng) {
        return this.app.orm.Survey.findAll({
            attributes: ['id', 'name', 'categorySort']
        });
    }
};

