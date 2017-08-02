'use strict';

require('babel-register')({
    only: /frontend/,
    presets: [
        'react',
        'es2015'
    ]
});

const createStore = require('redux').createStore;
const renderToStaticMarkup = require('react-dom/server').renderToStaticMarkup;
const RouterContext = require('react-router').RouterContext;
const Provider = require('react-redux').Provider;
const match = require('react-router').match;
const React = require('react');
const renderToString = require('react-dom/server').renderToString;

const Layout = require('./../../../frontend/js/components/Layout').default;
const routes = require('./../../../frontend/js/routes');
const admin = require('./../../../frontend/js/redux/admin-reducer');
const client = require('./../../../frontend/js/redux/client-reducer');
const loginActions = require('./../../../frontend/js/redux/actions/login-actions');

/**
 * @name
 * renderLayout
 * @description
 * Given context created by #getContext, returns the html for the given view.
 * @param {object} store - Redux store.
 * @param {string} bundle - Which bundle should be downloaded by the client? ex: 'client, 'admin'.
 * @param {object} renderProps - React props to pass to element.
 * @return {string}
 */

function renderLayout(store, bundle, renderProps) {
    return (
        renderToStaticMarkup(
            React.createElement(
                Layout,
                { bundle, state: store.getState() },
                renderToString(
                    React.createElement(Provider, { store: store },
                        React.createElement(RouterContext, renderProps)
                    )
                )
            )
        )
    );
}

/**
 * @name
 * whichStore
 * @param {} name - What bundle name? 'admin', 'client'
 * @return {object}
 * @return {object} store
 */

function whichStore(name) {
    switch (name) {
    case 'admin':
        return admin;
    case 'client':
        return client;
    default:
        return client;
    }
}


/**
 * @name
 * getContext
 * @description
 * Creates a redux store, checks to see if a user is logged in, and dispatches a login action
 * to the store.  Passes the store, bundle, and renderProps to the callback function.
 * @param {object} request - A Hapi response object.
 * @param {string} bundle - Which bundle should be downloaded by the client?
 * @param {function} callback - Nodeback callback.
 */

function getContext(request, bundle, callback) {
    const store = createStore(whichStore(bundle));
    const user = request.yar.get('user') || {};
    store.dispatch(loginActions.userLogin({
        name: user.name,
        emailAddress: user.emailAddress,
        role: user.role
    }));

    return match({routes, location: request.url.path}, (error, redirectLocation, renderProps) => {
        if (error) {
            return callback(error);
        }
        return callback(null, store, bundle, renderProps);
    });
}

/**
 * @name
 * getLayout
 * @description
 * Given a request object and a bundle name, pass the initial html for a given view to a callback.
 * @param {object} request - Hapi requet object.
 * @param {string} bundle - bundle name
 * @param {function} callback - nodeback;
 */

function getLayout(request, bundle, callback) {
    return getContext(request, bundle, function(error, store, bundle, renderProps) {
        if (error) {
            return callback(error);
        }
        return callback(null, renderLayout(store, bundle, renderProps));
    });
}

module.exports = getLayout;
