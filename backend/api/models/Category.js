'use strict';

const Model = require('trails-model');

/**
 * @module Category
 * @description Model describing a survey category
 */
module.exports = class Category extends Model {

    static config (app, Sequelize) {
        return {
            options: {
                classMethods: {
                    associate: (models) => {
                        models.Category.hasMany(models.Question, {
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
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            icon: {
                type: Sequelize.STRING
            }
        };
    }
};
