const { createStore, applyMiddleware, compose } = require('redux');
const thunk = require('redux-thunk').default;
const reducer =  require('./../../../dist/redux/client-reducer');

module.exports = function configureStore(initialState = {}) {
    const store = createStore(
        reducer,
        initialState,
        compose(applyMiddleware(thunk))
    );
    return store;
};
