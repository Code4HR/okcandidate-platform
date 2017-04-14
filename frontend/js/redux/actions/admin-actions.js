import fetch from 'isomorphic-fetch';
import checkStatus from './../utils/checkStatus';

export const FETCH_ALL_USERS_REQUEST = 'FETCH_ALL_USERS_REQUEST';
export const FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS';
export const FETCH_ALL_USERS_FAILURE = 'FETCH_ALL_USERS_FAILURE';

export function fetchAllUsersRequest() {
    return {
        type: FETCH_ALL_USERS_REQUEST
    };
}

export function fetchAllUsersSuccess(response) {
    return {
        type: FETCH_ALL_USERS_SUCCESS,
        response
    };
}

export function fetchAllUsersFailure(response) {
    return {
        type: FETCH_ALL_USERS_FAILURE,
        response
    };
}

export function fetchAllUsers() {
    return function(dispatch) {
        dispatch(fetchAllUsersRequest());
        return fetch('/api/v1/user')
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
        dispatch(fetchAllUsersSuccess(response));
    })
    .catch(error => dispatch(fetchAllUsersFailure(error)));
    };
}

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export function fetchUserRequest() {
    return {
        type: FETCH_USER_REQUEST
    };
}

export function fetchUserSuccess(response) {
    return {
        type: FETCH_USER_SUCCESS,
        response
    };
}

export function fetchUserFailure(response) {
    return {
        type: FETCH_USER_FAILURE,
        response
    };
}

export function fetchUser(id) {
    return function(dispatch) {
        dispatch(fetchUserRequest());
        return fetch('/api/v1/user/' + id)
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
        dispatch(fetchUserSuccess(response));
    })
    .catch(error => dispatch(fetchUserFailure(error)));
    };
}
