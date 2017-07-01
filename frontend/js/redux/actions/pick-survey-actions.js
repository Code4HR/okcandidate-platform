import fetch from 'isomorphic-fetch';
import checkStatus from './../utils/checkStatus';

export const FETCH_SURVEYS_BY_LOCATION_REQUEST = 'FETCH_SURVEYS_BY_LOCATION_REQUEST';
export const FETCH_SURVEYS_BY_LOCATION_SUCCESS = 'FETCH_SURVEYS_BY_LOCATION_SUCCESS';
export const FETCH_SURVEYS_BY_LOCATION_FAILURE = 'FETCH_SURVEYS_BY_LOCATION_FAILURE';

export function fetchSurveysByLocationRequest() {
    return {
        type: FETCH_SURVEYS_BY_LOCATION_REQUEST
    };
}

export function fetchSurveysByLocationSuccess(response) {
    return {
        type: FETCH_SURVEYS_BY_LOCATION_SUCCESS,
        response
    };
}

export function fetchSurveysByLocationFailure(error) {
    return {
        type: FETCH_SURVEYS_BY_LOCATION_FAILURE,
        error
    };
}

export function fetchSurveysByLocation(coordinates) {
    return function(dispatch) {
        dispatch(fetchSurveysByLocationRequest());
        return fetch('/api/v1/survey/location', {coordinates: coordinates})
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(fetchSurveysByLocationSuccess(response));
        })
        .catch(error => dispatch(fetchSurveysByLocationFailure(error)));
    };
}
