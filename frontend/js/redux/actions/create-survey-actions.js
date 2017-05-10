import fetch from 'isomorphic-fetch';
import checkStatus from './../utils/checkStatus';

export const FETCH_ALL_CITIES_REQUEST = 'FETCH_ALL_CITIES_REQUEST';
export const FETCH_ALL_CITIES_SUCCESS = 'FETCH_ALL_CITIES_SUCCESS';
export const FETCH_ALL_CITIES_FAILURE = 'FETCH_ALL_CITIES_FAILURE';


export function fetchAllCitiesRequest() {
    return {
        type: FETCH_ALL_CITIES_REQUEST
    };
}

export function fetchAllCitiesSuccess(response) {
    return {
        type: FETCH_ALL_CITIES_SUCCESS,
        response
    };
}

export function fetchAllCitiesFailure(response) {
    return {
        type: FETCH_ALL_CITIES_FAILURE,
        response
    };
}

export function fetchAllUsers() {
    return function(dispatch) {
        dispatch(fetchAllCitiesRequest());
        return fetch('/api/v1/questions')
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(fetchAllCitiesSuccess(response));
        })
        .catch(error => dispatch(fetchAllCitiesFailure(error)));
    };
}
