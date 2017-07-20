'use strict';

const Model = require('trails-model');

/**
 * @module QuestionType
 * @description Question types
 */
module.exports = class QuestionType extends Model {

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
