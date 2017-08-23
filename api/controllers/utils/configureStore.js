const { createStore, applyMiddleware, compose } = require('redux');
const thunk = require('redux-thunk').default;
const clientReducer =  require('./../../../dist/redux/client-reducer');
const adminReducer = require('./../../../dist/redux/admin-reducer');

module.exports = function configureStore(bundle, initialState = {}) {
    const store = createStore(
        (bundle === 'client' ? clientReducer : adminReducer),
        initialState,
        compose(applyMiddleware(thunk))
    );
    return store;
};
