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
                        models.Survey.hasMany(models.SurveyResult, {
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
                allowNull: false
            },
            privatePassPhrase: {
                type: Sequelize.STRING,
                allowNull: false
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
