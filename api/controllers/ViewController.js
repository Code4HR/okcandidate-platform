'use strict'

const Controller = require('trails-controller')
const createStore = require('redux').createStore
const Provider = require('react-redux').Provider

const React = require('react')
const match = require('react-router').match
const RouterContext = require('react-router').RouterContext
const renderToString = require('react-dom/server').renderToString
const renderToStaticMarkup = require('react-dom/server').renderToStaticMarkup

require('babel-register')({
  only: /frontend/,
  presets: [
    'react',
    'es2015'
  ]
})

const Layout = require('./../../frontend/js/components/Layout').default
const routes = require('./../../frontend/js/routes')
const admin = require('./../../frontend/js/redux/admin-reducer')
const survey = require('./../../frontend/js/redux/survey-reducer')
const loginActions = require('./../../frontend/js/redux/actions/login-actions')

module.exports = class ViewController extends Controller {

  home (request, reply) {
    const store = createStore(survey)
    match({routes: routes, location: request.url.path }, (error, redirectLocation, renderProps) => {
      const layout = renderToStaticMarkup(
        React.createElement(Layout, { bundle: 'survey', state: store.getState() },
          renderToString(
            React.createElement(Provider, {store: store},
              React.createElement(RouterContext, renderProps)
            )
          )
        )
      )
      reply(layout)
    })
  }

  admin (request, reply) {
    const store = createStore(admin)
    match({routes: routes, location: request.url.path }, (error, redirectLocation, renderProps) => {
      const foundUser = request.yar.get('user') || {}
      const user = { name: foundUser.name, emailAddress: foundUser.emailAddress }
      store.dispatch(loginActions.userLogin(user))
      const layout = renderToStaticMarkup(
        React.createElement(Layout, { bundle: 'admin', state: store.getState() },
          renderToString(
            React.createElement(Provider, {store: store},
              React.createElement(RouterContext, renderProps)
            )
          )
        )
      )
      reply(layout)
    })
  }

  login (request, reply) {
    reply.view('Login')
  }

}
