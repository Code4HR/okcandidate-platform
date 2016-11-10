'use strict'

const Controller = require('trails-controller')
const createStore = require('redux').createStore

require('babel-register')({
  only: /frontend/,
  presets: [
    'react',
    'es2015'
  ]
})

const admin = require('./../../frontend/js/redux/admin-reducer')
const survey = require('./../../frontend/js/redux/survey-reducer')

module.exports = class ViewController extends Controller {

  home (request, reply) {
    const user = request.yar.get('user')
    const context = {
      bundle: 'survey',
      store: createStore(survey)
    }
    reply.view('Home', context)
  }

  admin (request, reply) {
    const user = request.yar.get('user')
    const context = {
      bundle: 'admin',
      store: createStore(admin)
    }
    reply.view('Admin', context)
  }

  login (request, reply) {
    reply.view('Login')
  }

}
