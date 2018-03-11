import {
  FETCH_ALL_USERS_REQUEST,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../actions/admin-actions';

const initialState = {
    isFetching: false,
    users: {
        isFetching: false,
        currentlyEditing: null,
        results: []
    },
    editUser: {}
};

export default (state = initialState, action) => {

    switch (action.type) {
    case FETCH_ALL_USERS_REQUEST:
        return Object.assign({}, state, {
            users: Object.assign({}, state.users, {
                isFetching: true
            })
        });

    case FETCH_ALL_USERS_SUCCESS:
        return Object.assign({}, state, {
            users: Object.assign({}, state.users, {
                isFetching: false,
                results: action.response
            })
        });

    case FETCH_ALL_USERS_FAILURE:
        return Object.assign({}, state, {
            users: Object.assign({}, state.users, {
                isFetching: false,
                help: 'There was an error fetching users.'
            })
        });

    case FETCH_USER_REQUEST:
        return Object.assign({}, state, {
            users: Object.assign({}, state.users, {
                isFetching: true
            })
        });

    case FETCH_USER_SUCCESS:
        return Object.assign({}, state, {
            editUser: action.response
        });

    case FETCH_USER_FAILURE:
        return Object.assign({}, state, {
            users: Object.assign({}, state.users, {
                isFetching: false,
                help: 'There was an error fetching user.'
            })
        });

    default:
        return state;
    }

};
