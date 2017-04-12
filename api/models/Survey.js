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
            }
        };

    }

};
