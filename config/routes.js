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
        path: '/survey',
        handler: 'ViewController.survey'
    },
    {
        method: 'GET',
        path: '/category',
        handler: 'ViewController.category'
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
        method: 'POST',
        path: '/api/v1/user/edit/{id*}',
        handler: 'UserController.update'
    },

    {
        method: 'POST',
        path: '/api/v1/user/delete/{id*}',
        handler: 'UserController.delete'
    },
    {
        method: 'GET',
        path: '/api/v1/user',
        handler: 'UserController.getAll'
    },

    {
        method: 'GET',
        path: '/api/v1/user/{id*}',
        handler: 'UserController.getOne'
    },

    {
        method: ['GET'],
        path: '/api/v1/category',
        handler: 'CategoryController.getAll'
    },
    {
        method: ['GET'],
        path: '/api/v1/questions',
        handler: 'QuestionController.getAll'
    },
    {
        method: ['GET'],
        path: '/api/v1/surveymatch/{id*}',
        handler: 'SurveyResultController.match'
    },
    {
        method: ['GET'],
        path: '/api/v1/default/info',
        handler: 'DefaultController.info'
    }
];
