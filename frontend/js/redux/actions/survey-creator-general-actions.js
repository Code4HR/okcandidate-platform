import fetch from 'isomorphic-fetch';
import checkStatus from './../utils/checkStatus';
import { gotoRoute } from './router-actions';

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

export const SET_SURVEY_NAME = 'SET_SURVEY_NAME';
export const SET_SURVEY_START_DATE = 'SET_SURVEY_START_DATE';
export const SET_SURVEY_END_DATE = 'SET_SURVEY_END_DATE';
export const SELECT_QUESTION_TYPE = 'SELECT_QUESTION_TYPE';
export const TOGGLE_REGION_LIMIT = 'TOGGLE_REGION_LIMIT';

export function setSurveyName(name) {
    return {
        type: SET_SURVEY_NAME,
        name
    };
}

export function setSurveyStartDate(startDate) {
    return {
        type: SET_SURVEY_START_DATE,
        startDate
    };
}

export function setSurveyEndDate(endDate) {
    return {
        type: SET_SURVEY_END_DATE,
        endDate
    };
}

export function selectQuestionType(id) {
    return {
        type: SELECT_QUESTION_TYPE,
        id
    };
}

export function toggleRegionLimit() {
    return {
        type: TOGGLE_REGION_LIMIT
    };
}

export const FETCH_QUESTION_TYPES_REQUEST = 'FETCH_QUESTION_TYPES_REQUEST';
export const FETCH_QUESTION_TYPES_SUCCESS = 'FETCH_QUESTION_TYPES_SUCCESS';
export const FETCH_QUESTION_TYPES_FAILURE = 'FETCH_QUESTION_TYPES_FAILURE';

export function fetchQuestionTypesRequest() {
    return {
        type: FETCH_QUESTION_TYPES_REQUEST
    };
}

export function fetchQuestionTypesSuccess(response) {
    return {
        type: FETCH_QUESTION_TYPES_SUCCESS,
        response
    };
}

export function fetchQuestionTypesFailure(error) {
    return {
        type: FETCH_QUESTION_TYPES_FAILURE,
        error
    };
}

export function fetchQuestionTypes() {
    return (dispatch) => {
        dispatch(fetchQuestionTypesRequest());
        return fetch('/api/v1/questiontype')
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(fetchQuestionTypesSuccess(response));
        })
        .catch(error => {
            dispatch(fetchQuestionTypesFailure(error));
        });
    };
}

export const SUBMIT_SURVEY_GENERAL_REQUEST = 'SUBMIT_SURVEY_GENERAL_REQUEST';
export const SUBMIT_SURVEY_GENERAL_SUCCESS = 'SUBMIT_SURVEY_GENERAL_SUCCESS';
export const SUBMIT_SURVEY_GENERAL_FAILURE = 'SUBMIT_SURVEY_GENERAL_FAILURE';

export function submitSurveyGeneralRequest() {
    return {
        type: SUBMIT_SURVEY_GENERAL_REQUEST
    };
}

export function submitSurveyGeneralSuccess(response) {
    return {
        type: SUBMIT_SURVEY_GENERAL_SUCCESS,
        response
    };
}

export function submitSurveyGeneralFailure(error) {
    return {
        type: SUBMIT_SURVEY_GENERAL_FAILURE,
        error
    };
}

export const UPDATE_SURVEY_GENERAL_INFO_REQUEST = 'UPDATE_SURVEY_GENERAL_INFO_REQUEST';
export const UPDATE_SURVEY_GENERAL_INFO_SUCCESS = 'UPDATE_SURVEY_GENERAL_INFO_SUCCESS';
export const UPDATE_SURVEY_GENERAL_INFO_FAILURE = 'UPDATE_SURVEY_GENERAL_INFO_FAILURE';

export function updateSurveyGeneralInfoRequest() {
    return {
        type: UPDATE_SURVEY_GENERAL_INFO_REQUEST
    };
}

export function updateSurveyGeneralInfoSuccess(response) {
    return {
        type: UPDATE_SURVEY_GENERAL_INFO_SUCCESS,
        response
    };
}

export function updateSurveyGeneralInfoFailure(error) {
    return {
        type: UPDATE_SURVEY_GENERAL_INFO_FAILURE,
        error
    };
}

export function updateSurveyGeneralInfo(state) {
    return (dispatch) => {
        dispatch(updateSurveyGeneralInfoRequest());
        fetch(`/api/v1/survey/${state.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: state.name,
                startDate: state.startDate,
                endDate: state.endDate,
                QuestionTypeId: state.QuestionTypeId,
                regionLimit: state.regionLimit
            })
        })
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(updateSurveyGeneralInfoSuccess(response));
        })
        .catch(error => {
            dispatch(updateSurveyGeneralInfoFailure(error));
        });
    };
}

export function submitSurveyGeneral(state) {
    return (dispatch) => {
        dispatch(submitSurveyGeneralRequest());
        fetch('/api/v1/survey', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: state.name,
                startDate: state.startDate,
                endDate: state.endDate,
                QuestionTypeId: state.QuestionTypeId,
                regionLimit: state.regionLimit
            })
        })
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(submitSurveyGeneralSuccess(response));
            gotoRoute(`/admin/survey/${response.id}/offices`);
        })
        .catch(error => {
            dispatch(submitSurveyGeneralFailure(error));
        });
    };
}

export const FETCH_SURVEY_GENERAL_INFO_REQUEST = 'FETCH_SURVEY_GENERAL_INFO_REQUEST';
export const FETCH_SURVEY_GENERAL_INFO_SUCCESS = 'FETCH_SURVEY_GENERAL_INFO_SUCCESS';
export const FETCH_SURVEY_GENERAL_INFO_FAILURE = 'FETCH_SURVEY_GENERAL_INFO_FAILURE';

export function fetchSurveyGeneralInfoRequest() {
    return {
        type: FETCH_SURVEY_GENERAL_INFO_REQUEST
    };
}

export function fetchSurveyGeneralInfoSuccess(response) {
    return {
        type: FETCH_SURVEY_GENERAL_INFO_SUCCESS,
        response
    };
}

export function fetchSurveyGeneralInfoFailure(error) {
    return {
        type: FETCH_SURVEY_GENERAL_INFO_FAILURE,
        error
    };
}

export function fetchSurveyGeneralInfo(id) {
    return (dispatch) => {
        dispatch(fetchSurveyGeneralInfoRequest());
        return fetch(`/api/v1/survey/${id}`)
        .then(response => response.json())
        .then(response => {
            return dispatch(fetchSurveyGeneralInfoSuccess(response));
        })
        .catch(error => {
            return dispatch(fetchSurveyGeneralInfoFailure(error));
        });
    };
}
