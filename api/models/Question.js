'use strict';

const Model = require('trails-model');

/**
 * @module Question
 * @description Model describing a question
 */
module.exports = class Question extends Model {

    static config (app, Sequelize) {
        return {
            options: {
                classMethods: {
                    associate: (models) => {
                        models.Question.hasMany(models.Answer);
                    }
                }
            }
        };
    }

    static schema (app, Sequelize) {

    }

};
