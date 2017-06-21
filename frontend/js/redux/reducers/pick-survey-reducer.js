import {
    FETCH_SURVEYS_BY_LOCATION_REQUEST,
    FETCH_SURVEYS_BY_LOCATION_SUCCESS,
    FETCH_SURVEYS_BY_LOCATION_FAILURE
} from './../actions/pick-survey-actions';

const initialState = {
    isFetching: false,
    surveys: [],
    error: ''
};

export default function surveyReducer(state = initialState, action) {
    switch (action.type) {

    case FETCH_SURVEYS_BY_LOCATION_REQUEST:
        return Object.assign({}, state, {
            isFetching: true,
            error: initialState.error
        });
    case FETCH_SURVEYS_BY_LOCATION_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            surveys: action.response,
            error: initialState.error
        });
    case FETCH_SURVEYS_BY_LOCATION_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            error: action.error
        });
    default:
        return state;
    }
}
