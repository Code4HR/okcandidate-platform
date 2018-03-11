const React = require('react');
const ReactDOM = require('react-dom');
import { Router, browserHistory } from 'react-router';
import routes from './../routes';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducer from './../redux/client-reducer';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

// Redux Setup
const NODE_ENV = process.env.NODE_ENV;
const preloadedState = window.state;

let logger, store;

if (NODE_ENV === 'production') {
    store = createStore(reducer, preloadedState, applyMiddleware(thunk));
}
else {
    logger = createLogger();
    store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
  );
}

const mountNode = document.getElementById('app-mount');

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  mountNode
);
