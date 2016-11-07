'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  helloWorld (request, reply) {
    reply('Hello Trails.js !')
  }

  home (request, reply) {
    const user = request.yar.get('user')
    reply.view('Home', {user})
  }

  admin (request, reply) {
    const user = request.yar.get('user')
    reply.view('Admin', {user})
  }

  login (request, reply) {
    reply.view('Login')
  }

}
