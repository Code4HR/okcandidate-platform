'use strict';

const Model = require('trails-model');

/**
 * @module SurveyResultCategory
 * @description Model describing a survey result category
 */
module.exports = class SurveyResultCategory extends Model {

    static config (app, Sequelize) {
        return {
            options: {
                classMethods: {
                    associate: (models) => {
                        models.SurveyResult.hasMany(models.SurveyResultCategory, {
                            onDelete: 'CASCADE',
                            foreignKey: {
                                allowNull: false
                            }
                        });
                        models.Category.hasOne(models.SurveyResultCategory, {
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
            rank: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        };
    }
};
