'use strict';

const Model = require('trails-model');

/**
 * @module Answer
 * @description Question answers
 */
module.exports = class Answer extends Model {

    static config (app, Sequelize) {
        return {
            options: {
                classMethods: {
                    associate: (models) => {
                        models.Answer.belongsTo(models.Question, {
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
            text: {
                type: Sequelize.STRING,
                allowNull: false
            }
        };
    }
};
