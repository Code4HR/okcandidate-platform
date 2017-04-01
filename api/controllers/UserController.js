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
      reply.redirect('/admin/user')
    })
    .catch(error => {
        reply(Boom.badRequest('There was an error creating the user.'));
    });

    }

  update (request, reply) {

    const userData = request.payload
    const id = request.params.id

    this.app.services.UserService.update(id, userData)
    .then(response => {
      reply.redirect('/admin/user')
    })
    .catch(error => {
      console.log(error)
      reply(Boom.badRequest('There was an error updating the user.'))
    })

  }

  getOne (request, reply) {
    this.app.services.UserService.getOne(request.params.id)
    .then(response => {
      reply(response)
    })
    .catch(error => {
      reply(Boom.badRequest('Could not get the users.'))
    })
  }

  getAll (request, reply) {
    this.app.services.UserService.getAll()
    .then(response => {
      reply(response)
    })
    .catch(error => {
      reply(Boom.badRequest('Could not get the users.'))
    })
  }

}
