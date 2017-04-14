'use strict';

const Model = require('trails-model');

/**
 * @module Candidate
 * @description Model describing a Candidate
 */
module.exports = class Candidate extends Model {

    static config (app, Sequelize) {
        return {
            options: {
                classMethods: {
                    associate: (models) => {
                        models.Candidate.hasOne(models.SurveyResult, {
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
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            picture: {
                type: Sequelize.STRING
            },
            url: {
                type: Sequelize.STRING
            },
            bio: {
                type: Sequelize.STRING
            }
        };
    }

};
