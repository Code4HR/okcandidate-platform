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
                        models.SurveyResultCategory.belongsTo(models.SurveyResult, {
                            onDelete: 'CASCADE',
                            foreignKey: {
                                allowNull: false
                            }
                        });
                        models.SurveyResultCategory.belongsTo(models.Category, {
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
