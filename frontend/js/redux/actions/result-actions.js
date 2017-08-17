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

export function fetchSurveyResults(passPhrase) {
    return function(dispatch) {
        dispatch(fetchSurveyResultsRequest());
        return fetch('/api/v1/surveymatch/' + passPhrase)
            .then(checkStatus)
            .then(response => response.json())
            .then(response => {
                dispatch(fetchSurveyResultsSuccess(response));
            })
            .catch(error => dispatch(fetchSurveyResultsFailure(error)));
    };
}

export const TOGGLE_MODAL_STATE = 'TOGGLE_MODAL_STATE';
export const SET_EMAIL_VALUE = 'SET_EMAIL_VALUE';
export const SET_PHONE_VALUE = 'SET_PHONE_VALUE';
export const TOGGLE_NEWSLETTER_VALUE = 'TOGGLE_NEWSLETTER_VALUE';

export function setEmailValue(value) {
    return {
        type: SET_EMAIL_VALUE,
        value
    };
}

export function setPhoneValue(value) {
    return {
        type: SET_PHONE_VALUE,
        value
    };
}

export function toggleNewsletterValue() {
    return {
        type: TOGGLE_NEWSLETTER_VALUE
    };
}

export function toggleModalState() {
    return {
        type: TOGGLE_MODAL_STATE
    };
}

export const CREATE_ELECTION_REMINDER_REQUEST = 'CREATE_ELECTION_REMINDER_REQUEST';
export const CREATE_ELECTION_REMINDER_SUCCESS =
'CREATE_ELECTION_REMINDER_SUCCESS';
export const CREATE_ELECTION_REMINDER_FAILURE =
'CREATE_ELECTION_REMINDER_FAILURE';

export function createElectionReminderRequest() {
    return {
        type: CREATE_ELECTION_REMINDER_REQUEST
    };
}

export function createElectionReminderSuccess(response) {
    return {
        type: CREATE_ELECTION_REMINDER_SUCCESS,
        response
    };
}

export function createElectionReminderFailure(error) {
    return {
        type: CREATE_ELECTION_REMINDER_FAILURE,
        error
    };
}

export function createElectionReminder(SurveyResultId, payload, callback) {
    return (dispatch) => {

        const body = {};
        payload.email && (body.email = payload.email);
        payload.phone && (body.phone = payload.phone);

        dispatch(createElectionReminderRequest());
        fetch(`/api/v1/electionreminder/${SurveyResultId}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(checkStatus)
            .then(response => response.json())
            .then(response => {
                dispatch(createElectionReminderSuccess(response));
                return callback && callback(null, response);
            })
            .catch(error => {
                dispatch(createElectionReminderFailure(error));
                return callback && callback(error);
            });
    };
}

export const HIDE_ELECTION_REMINDER_PROMPT = 'HIDE_ELECTION_REMINDER_PROMPT';

export function hideElectionReminderPrompt() {
    return {
        type: HIDE_ELECTION_REMINDER_PROMPT
    };
}
