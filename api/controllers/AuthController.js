'use strict';

const Controller = require('trails-controller');

/**
 * @module AuthController
 * @description Generated Trails.js Controller.
 */
module.exports = class AuthController extends Controller {

    login (request, reply) {
        const emailAddress = request.payload.emailAddress;
        const password = request.payload.password;

        this.app.services.AuthService.login(emailAddress, password)
        .then(user => {
            if (user) {
                request.yar.set('user', user);
                reply.redirect('/admin');
            }
            else {
                reply.view('Login', {
                    error: 'That email address or password doesn\'t exist'
                });
            }
        })
        .catch(err => {
            this.log.error(err);
            reply.view('Login', {error: 'There was an error logging in.'});
        });
    }

    logout (request, reply) {
        request.yar.clear('user');
        reply.redirect('/login');
    }

};
