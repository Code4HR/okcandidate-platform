'use strict';

const Service = require('trails-service');

/**
 * @module ResultService
 * @description candidate match results
 */
module.exports = class SurveyResultService extends Service {
    get() {
        return this.app.orm.SurveyResult.findAll();
    }

    match(id) {
        return this.app.orm.SurveyResult.find({where: {id: id}});
    }
};
