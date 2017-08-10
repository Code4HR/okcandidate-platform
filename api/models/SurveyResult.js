'use strict';

const Model = require('trails-model');

/**
 * @module SurveyResult
 * @description Model describing a Survey Result
 */
module.exports = class SurveyResult extends Model {

    static config (app, Sequelize) {
        return {
            options: {
                classMethods: {
                    associate: (models) => {
                        models.SurveyResult.belongsTo(models.Survey, {
                            onDelete: 'CASCADE',
                            foreignKey: {
                                allowNull: false
                            }
                        });
                        models.SurveyResult.belongsTo(models.Candidate, {
                            foreignKey: {
                                allowNull: true
                            }
                        });
                        models.SurveyResult.hasMany(models.SurveyResultAnswer, {
                            onDelete: 'CASCADE',
                            foreignKey: {
                                allowNull: false
                            }
                        });
                        models.SurveyResult.hasMany(models.SurveyResultCategory, {
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
            publicPassPhrase: {
                type: Sequelize.STRING,
                // allowNull: false // revert this before PR
            },
            privatePassPhrase: {
                type: Sequelize.STRING,
                // allowNull: false // revert this before PR
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: true
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true
            }
        };
    }

};
