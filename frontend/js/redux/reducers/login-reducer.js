const initialState = {};

import {
  USER_LOGIN,
  USER_LOGOUT
} from './../actions/login-actions';

export default (state = initialState, action) => {

    switch (action.type) {

    case USER_LOGIN:
        return Object.assign({}, action.user);

    case USER_LOGOUT:
        return initialState;

    default:
        return state;

    }

};
