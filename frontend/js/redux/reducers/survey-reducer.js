import {
    FETCH_SURVEY_QUESTIONS_REQUEST,
    FETCH_SURVEY_QUESTIONS_SUCCESS,
    FETCH_SURVEY_QUESTIONS_FAILURE
} from './../actions/survey-actions';

const initialState = {
    isFetching: false,
    questions: [],
    error: ''
};

export default function surveyReducer(state = initialState, action) {
    switch (action.type) {

    case FETCH_SURVEY_QUESTIONS_REQUEST:
        return Object.assign({}, state, {
            isFetching: true,
            error: initialState.error
        });
    case FETCH_SURVEY_QUESTIONS_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            questions: action.response,
            error: initialState.error
        });
    case FETCH_SURVEY_QUESTIONS_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            help: action.error
        });
    default:
        return state;
    }
}
