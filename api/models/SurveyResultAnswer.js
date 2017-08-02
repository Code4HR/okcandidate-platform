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
                        models.SurveyResultAnswer.belongsTo(models.SurveyResult, {
                            onDelete: 'CASCADE',
                            foreignKey: {
                                allowNull: false
                            }
                        });
                        models.SurveyResultAnswer.belongsTo(models.Question, {
                            onDelete: 'CASCADE',
                            foreignKey: {
                                allowNull: false
                            }
                        });
                        models.SurveyResultAnswer.belongsTo(models.Answer, {
                            onDelete: 'CASCADE',
                            foreignKey: {
                                allowNull: true
                            }
                        });
                    }
                }
            }
        };
    }

    static schema (app, Sequelize) {
        return {
            sentiment: {
                type: Sequelize.INTEGER,
                allowNull: true
            }
        };
    }

};
