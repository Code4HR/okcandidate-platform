'use strict';

const Policy = require('trails-policy');
const Boom = require('boom');

/**
 * @module AuthPolicy
 * @description Works with roles to allow or disallow access.
 */
module.exports = class AuthPolicy extends Policy {

  /*
   * @name AuthPolicy.isAdmin
   * @description
   * Checks to see if a user is logged in.
   * If so, adds the user data to the request object.
   * If not, throws an error.
   */
    isLoggedIn (request, reply) {
        const user = request.yar.get('user');
        if (user) {
            request['_user'] = user;
            reply();
        }
        else {
            reply(Boom.unauthorized());
        }
    }

  /*
   * @name AuthPolicy.isAdmin
   * @description
   * Checks to see if a user is logged in as an admin.  If not, throws an error.
   */
    isAdmin (request, reply) {
        this.app.orm.Role.findOne({where: {id: request['_user'].RoleId}})
    .then(role => {
        role = role.toJSON();
        if (role.name === 'admin') {
            reply();
        }
        else {
            reply(Boom.unauthorized());
        }
    });
    }

  /*
   * @name AuthPolicy.isCandidate
   * @description
   * Checks to see if a user is logged in as a candidate.  If not, throws an error.
   */
    isCandidate (request, reply) {
        this.app.orm.Role.findOne({where: {id: request['_user'].RoleId}})
    .then(role => {
        role = role.toJSON();
        if (role.name === 'candidate') {
            reply();
        }
        else {
            reply(Boom.unauthorized());
        }
    });
    }

};
