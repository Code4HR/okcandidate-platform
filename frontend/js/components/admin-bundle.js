const React = require('react')
const ReactDOM = require('react-dom')

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducer from './../redux/admin-reducer'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

// Redux Setup
const NODE_ENV = process.env.NODE_ENV

let logger, store

if (NODE_ENV === 'production') {
  store = createStore(reducer, applyMiddleware(thunk))
}
else {
  logger = createLogger()
  store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
  )
}

const Admin = require('./environments/Admin').default

const mountNode = document.getElementById('app-mount')

ReactDOM.render(
  <Provider store={store}>
    <Admin store={store} />
  </Provider>,
  mountNode
)
