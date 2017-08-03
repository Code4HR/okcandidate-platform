'use strict';

const Model = require('trails-model');

/**
 * @module Question
 * @description Model describing a question
 */
module.exports = class Question extends Model {

    static config (app, Sequelize) {
        return {
            options: {
                classMethods: {
                    associate: (models) => {
                        models.Category.hasOne(models.Question, {
                            onDelete: 'CASCADE',
                            foreignKey: {
                                allowNull: false
                            }
                        });
                        models.Question.belongsTo(models.Survey, {
                            onDelete: 'CASCADE',
                            foreignKey: {
                                allowNull: false
                            }
                        });
                        models.Question.hasMany(models.Answer, {
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
