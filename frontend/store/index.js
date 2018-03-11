import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import clientReducer from './client-reducer';

export const initStore = () => {
    return createStore(clientReducer, {}, applyMiddleware(thunk))
};
