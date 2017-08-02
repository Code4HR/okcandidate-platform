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
                        models.Survey.hasMany(models.Question);
                        models.Survey.hasMany(models.SurveyResult);
                        models.Survey.belongsToMany(models.Region, {through: 'surveyregion'});
                        models.Survey.belongsToMany(models.Office, {through: 'surveyoffice'});
                        models.SurveyStatus.hasOne(models.Survey);
                        models.Survey.belongsTo(models.QuestionType);
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
