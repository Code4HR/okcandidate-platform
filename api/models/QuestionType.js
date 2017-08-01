'use strict';

const Model = require('trails-model');

/**
 * @module QuestionType
 * @description Question types
 */

module.exports = class QuestionType extends Model {

    static config (app, Sequelize) {
        return {
            options: {
                classMethods: {
                    associate: (models) => {
                        models.QuestionType.hasMany(models.Survey, { as: 'surveys'});
                    }
                }
            }
        };

    }

    static schema (app, Sequelize) {
        return {
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            multipleChoice: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            sentiment: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            }
        };
    }
};
