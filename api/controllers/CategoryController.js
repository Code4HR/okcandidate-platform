'use strict';

const Controller = require('trails-controller');
const Boom = require('boom');

/**
 * @module CategoryController
 * @description TODO Category Controller.
 */
module.exports = class CategoryController extends Controller {

    getAll (request, reply) {
        this.app.services.CategoryService.getAll()
      .then(response => {
          reply(response);
      })
      .catch(error => {
          reply(Boom.badRequest('Could not get the categories.'));
      });
    }
};
