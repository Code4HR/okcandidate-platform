/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict';

module.exports = [
  /**
   * Frontend Routes
   */
    {
        method: 'GET',
        path: '/',
        handler: 'ViewController.home'
    },
    {
        method: 'GET',
        path: '/admin/{view*}',
        handler: 'ViewController.admin'
    },
    {
        method: 'GET',
        path: '/login',
        handler: 'ViewController.login'
    },
    {
        method: ['POST'],
        path: '/login',
        handler: 'AuthController.login'
    },
    {
        method: 'GET',
        path: '/logout',
        handler: 'AuthController.logout'
    },
    {
        method: 'GET',
        path: '/results',
        handler: 'ViewController.results'
    },
  /**
   * Backend Routes
   */
    {
        method: 'POST',
        path: '/api/v1/user',
        handler: 'UserController.create'
    },
    {
        method: ['GET'],
        path: '/api/v1/default/info',
        handler: 'DefaultController.info'
    }
];
