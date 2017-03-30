'use strict';

const Controller = require('trails-controller');
const Boom = require('boom');

/**
 * @module UserController
 * @description Generated Trails.js Controller.
 */
module.exports = class UserController extends Controller{

    create (request, reply) {

        const userData = request.payload;

        this.app.services.UserService.create(userData)
    .then(response => {
        reply(response);
    })
    .catch(error => {
        reply(Boom.badRequest('There was an error creating the user.'));
    });

    }

};
