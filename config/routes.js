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
        path: '/start',
        handler: 'ViewController.start'
    },
    {
        method: 'GET',
        path: '/survey',
        handler: 'ViewController.surveyList'
    },
    {
        method: 'GET',
        path: '/survey/{id}',
        handler: 'ViewController.survey'
    },
    {
        method: 'GET',
        path: '/survey/{id}/category',
        handler: 'ViewController.category'
    },
    {
        method: 'GET',
        path: '/survey/{id}/questions',
        handler: 'ViewController.questions'
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
        path: '/results/{passPhrase*}',
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
        method: 'GET',
        path: '/api/v1/survey/location',
        handler: 'SurveyController.getSurveyByLatLng'
    },
    {
        method: 'POST',
        path: '/api/v1/survey',
        handler: 'SurveyController.create'
    },
    {
        method: 'PUT',
        path: '/api/v1/survey/{id}',
        handler: 'SurveyController.update'
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
        path: '/api/v1/surveymatch/{publicPassPhrase*}',
        handler: 'SurveyResultController.match'
    },
    {
        method: ['GET'],
        path: '/api/v1/default/info',
        handler: 'DefaultController.info'
    },
    {
        method: ['GET'],
        path: '/api/v1/geolocation',
        handler: 'GeolocationController.get'
    }
];
