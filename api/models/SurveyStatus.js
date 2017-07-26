'use strict';

const Model = require('trails-model');

/**
 * @module SurveyStatus
 * @description Survey status
 */
module.exports = class SurveyStatus extends Model {

    static config (app, Sequelize) {

    }

    static schema (app, Sequelize) {
        return {
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
        };
    }
};
