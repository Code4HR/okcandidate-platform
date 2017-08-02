'use strict';

const Model = require('trails-model');

/**
 * @module User
 * @description Model containing information about users.
 */
module.exports = class User extends Model {

    static config (app, Sequelize) {

    }

    static schema (app, Sequelize) {
        return {
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            emailAddress: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: Sequelize.STRING,
            role: {
                type: Sequelize.STRING,
                defaultValue: 'voter'
            }
        };
    }

};
