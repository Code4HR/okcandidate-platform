import fetch from 'isomorphic-fetch';
import checkStatus from './../utils/checkStatus';
import uniqBy from 'lodash.uniqby';

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

export function fetchSurveyQuestions(id) {
    return function(dispatch) {
        dispatch(fetchSurveyQuestionsRequest());
        return fetch(`/api/v1/question?SurveyId=${id}`)
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(fetchSurveyQuestionsSuccess(uniqBy(response, 'id')));
        })
        .catch(error => dispatch(fetchSurveyQuestionsFailure(error)));
    };
}

export const SET_QUESTION_AGREEMENT = 'SET_QUESTION_AGREEMENT';
export function setQuestionAgreement(agreement, questionId) {
    return {
        type: SET_QUESTION_AGREEMENT,
        agreement,
        questionId
    };
}

export const GOTO_NEXT_QUESTION = 'GOTO_NEXT_QUESTION';
export const GOTO_PREV_QUESTION = 'GOTO_PREV_QUESTION';

export function gotoNextQuestion() {
    return {
        type: GOTO_NEXT_QUESTION
    };
}

export function gotoPrevQuestion() {
    return {
        type: GOTO_PREV_QUESTION
    };
}
