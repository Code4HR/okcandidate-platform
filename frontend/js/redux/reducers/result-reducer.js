import {
    FETCH_SURVEY_RESULTS_REQUEST,
    FETCH_SURVEY_RESULTS_SUCCESS,
    FETCH_SURVEY_RESULTS_FAILURE
} from './../actions/result-actions';

const initialState = {
    isFetching: false,
    matches: [],
    error: ''
};

export default function resultReducer(state = initialState, action) {
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
    default:
        return state;
    }
}
