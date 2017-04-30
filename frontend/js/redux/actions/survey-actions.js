import fetch from 'isomorphic-fetch';
import checkStatus from './../utils/checkStatus';

export const FETCH_SURVEY_QUESTIONS_REQUEST = 'FETCH_SURVEY_QUESTIONS_REQUEST';
export const FETCH_SURVEY_QUESTIONS_SUCCESS = 'FETCH_SURVEY_QUESTIONS_SUCCESS';
export const FETCH_SURVEY_QUESTIONS_FAILURE = 'FETCH_SURVEY_QUESTIONS_FAILURE';

export function fetchSurveyQuestionsRequest() {
    return {
        type: FETCH_SURVEY_QUESTIONS_REQUEST
    };
}

export function fetchSurveyQuestionsSuccess(response) {
    return {
        type: FETCH_SURVEY_QUESTIONS_SUCCESS,
        response
    };
}

export function fetchSurveyQuestionsFailure(error) {
    return {
        type: FETCH_SURVEY_QUESTIONS_FAILURE,
        error
    };
}

export function fetchSurveyQuestions() {
    return function(dispatch) {
        dispatch(fetchSurveyQuestionsRequest());
        return fetch('/api/v1/question')
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(fetchSurveyQuestionsSuccess(response));
        })
        .catch(error => dispatch(fetchSurveyQuestionsFailure(error)));
    };
}

export const SET_PROMPT_AGREEMENT = 'SET_PROMPT_AGREEMENT';
export function setPromptAgreement(agreement, questionId) {
    return {
        type: SET_PROMPT_AGREEMENT,
        agreement,
        questionId
    }
}