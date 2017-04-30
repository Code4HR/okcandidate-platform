'use strict';

const Model = require('trails-model');

/**
 * @module SurveyResultAnswer
 * @description Model describing a Survey Result Answer
 */
module.exports = class SurveyResultAnswer extends Model {

    static config (app, Sequelize) {
        return {
            options: {
                classMethods: {
                    associate: (models) => {
                        models.SurveyResult.hasMany(models.SurveyResultAnswer, {
                            onDelete: 'CASCADE',
                            foreignKey: {
                                allowNull: false
                            }
                        });
                        models.Question.hasOne(models.SurveyResultAnswer, {
                            onDelete: 'CASCADE',
                            foreignKey: {
                                allowNull: false
                            }
                        });
                    }
                }
            }
        };
    }

    static schema (app, Sequelize) {
        return {
            intensity: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        };
    }

};
