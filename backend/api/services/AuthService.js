'use strict';

const Service = require('trails-service');
const bcrypt = require('bcrypt');

/**
 * @module LoginService
 * @description Service for handling logins.
 */
module.exports = class AuthService extends Service {

    login(emailAddress, password) {

        return this.app.orm.User.findOne({where: {emailAddress}})
    .then(user => {

        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, isValid) => {
                if (err) reject(err);
                if (isValid) {
                    resolve(user);
                }
                else {
                    resolve(false);
                }
            });
        });
    });

    }

};
