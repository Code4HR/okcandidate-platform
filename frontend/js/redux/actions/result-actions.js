import fetch from 'isomorphic-fetch';
import checkStatus from './../utils/checkStatus';

export const FETCH_SURVEY_RESULTS_REQUEST = 'FETCH_SURVEY_RESULTS_REQUEST';
export const FETCH_SURVEY_RESULTS_SUCCESS = 'FETCH_SURVEY_RESULTS_SUCCESS';
export const FETCH_SURVEY_RESULTS_FAILURE = 'FETCH_SURVEY_RESULTS_FAILURE';

export function fetchSurveyResultsRequest() {
    return {
        type: FETCH_SURVEY_RESULTS_REQUEST
    };
}

export function fetchSurveyResultsSuccess(response) {
    return {
        type: FETCH_SURVEY_RESULTS_SUCCESS,
        response
    };
}

export function fetchSurveyResultsFailure(error) {
    return {
        type: FETCH_SURVEY_RESULTS_FAILURE,
        error
    };
}

export function fetchSurveyResults() {
    return function(dispatch) {
        dispatch(fetchSurveyResultsRequest());
        return fetch('/api/v1/surveyresult')
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(fetchSurveyResultsSuccess(response));
        })
        .catch(error => dispatch(fetchSurveyResultsFailure(error)));
    };
}
