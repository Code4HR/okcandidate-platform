import {
    FETCH_SURVEY_RESULTS_REQUEST,
    FETCH_SURVEY_RESULTS_SUCCESS,
    FETCH_SURVEY_RESULTS_FAILURE,
    TOGGLE_MODAL_STATE,
    SET_EMAIL_VALUE,
    SET_EMAIL_ERROR,
    SET_PHONE_VALUE,
    SET_PHONE_ERROR,
    TOGGLE_NEWSLETTER_VALUE,
    CREATE_ELECTION_REMINDER_FAILURE,
    CREATE_ELECTION_REMINDER_SUCCESS,
    HIDE_ELECTION_REMINDER_PROMPT
} from './../actions/result-actions';

import {
    FETCH_SURVEY_RESULT_SUCCESS
} from './../actions/survey-actions';

const initialState = {
    SurveyResultId: null,
    isFetching: false,
    matches: [],
    error: '',
    showElectionReminderModal: false,
    showElectionReminderPrompt: true,
    electionReminderCreated: false,
    email: {
        value: '',
        error: ''
    },
    phone: {
        value: '',
        error: ''
    },
    newsletter: false
};

export default function resultReducer(state = initialState, action) {

    const obj = {};
    switch (action.type) {

    case FETCH_SURVEY_RESULTS_REQUEST:
        return Object.assign({}, state, {
            isFetching: true,
            error: initialState.error
        });

    case FETCH_SURVEY_RESULTS_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            matches: action.response,
            error: initialState.error
        });

    case FETCH_SURVEY_RESULTS_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            error: action.error
        });

    case SET_EMAIL_VALUE:
        return Object.assign({}, state, {
            email: Object.assign({}, state.email, {
                value: action.value,
                error: ''
            })
        });

    case SET_PHONE_VALUE:
        return Object.assign({}, state, {
            phone: Object.assign({}, state.phone, {
                value: action.value,
                error: ''
            })
        });

    case SET_EMAIL_ERROR:
        return Object.assign({}, state, {
            email: Object.assign({}, state.email, {
                error: action.error
            })
        });

    case SET_PHONE_ERROR:
        return Object.assign({}, state, {
            phone: Object.assign({}, state.phone, {
                error: action.error
            })
        });

    case TOGGLE_NEWSLETTER_VALUE:
        return Object.assign({}, state, {
            newsletter: !state.newsletter
        });

    case TOGGLE_MODAL_STATE:
        return Object.assign({}, state, {
            showElectionReminderModal: !state.showElectionReminderModal
        });

    case FETCH_SURVEY_RESULT_SUCCESS:
        return Object.assign({}, state, {
            SurveyResultId: action.response.id
        });

    case CREATE_ELECTION_REMINDER_FAILURE:
        obj['email'] = Object.assign({}, state.email);
        obj['phone'] = Object.assign({}, state.phone);

        JSON.parse(action.error.message).forEach(error => {
            obj[error.path].error = error.message;
        });

        return Object.assign({}, state, obj);

    case CREATE_ELECTION_REMINDER_SUCCESS:
        return Object.assign({}, state, {
            showElectionReminderModal: false,
            electionReminderCreated: true,
            showElectionReminderPrompt: false
        });

    case HIDE_ELECTION_REMINDER_PROMPT:
        return Object.assign({}, state, {
            showElectionReminderPrompt: false
        });

    default:
        return state;
    }
}
