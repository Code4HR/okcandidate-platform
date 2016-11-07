'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  helloWorld (request, reply) {
    reply('Hello Trails.js !')
  }

  home (request, reply) {
    reply.view('Home')
  }

  admin (request, reply) {
    reply.view('Admin')
  }

}
