'use strict';

const Model = require('trails-model');

/**
 * @module Survey
 * @description Model describing a Survey
 */
module.exports = class Survey extends Model {

    static config (app, Sequelize) {
        return {
            options: {
                classMethods: {
                    associate: (models) => {
                        models.Survey.belongsTo(models.SurveyStatus, {
                            foreignKey: {
                                allowNull: false
                            }
                        });
                        models.Survey.belongsTo(models.QuestionType, {
                            foreignKey: {
                                allowNull: false
                            }
                        });
                        models.Survey.hasMany(models.Question, {
                            foreignKey: {
                                allowNull: false
                            }
                        });
                        models.Survey.belongsToMany(models.Region, {through: 'surveyregion'});
                        models.Survey.belongsToMany(models.Office, {through: 'surveyoffice'});
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
            startDate: {
                type: Sequelize.DATE,
                allowNull: true
            },
            endDate: {
                type: Sequelize.DATE,
                allowNull: true
            },
            categorySort: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            regionLimit: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            }
        };
    }

};
