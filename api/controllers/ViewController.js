'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  helloWorld (request, reply) {
    reply('Hello Trails.js !')
  }

  home (request, reply) {
    const user = request.yar.get('user')
    const context = {
      route: '/',
      user: user || {}
    }
    context.state = 'window.state = ' + JSON.stringify(context)
    reply.view('Home', context)
  }

  admin (request, reply) {
    const user = request.yar.get('user')
    const context = {
      route: '/admin',
      user: user || {}
    }
    context.state = 'window.state = ' + JSON.stringify(context)
    reply.view('Admin', context)
  }

  login (request, reply) {
    reply.view('Login')
  }

}
