import {
    FETCH_SURVEYS_BY_LOCATION_REQUEST,
    FETCH_SURVEYS_BY_LOCATION_SUCCESS,
    FETCH_SURVEYS_BY_LOCATION_FAILURE,
    GET_LOCATION_BY_ADDRESS_REQUEST,
    GET_LOCATION_BY_ADDRESS_SUCCESS,
    GET_LOCATION_BY_ADDRESS_FAILURE,
    GET_LOCATION_BY_GPS_REQUEST,
    GET_LOCATION_BY_GPS_SUCCESS,
    GET_LOCATION_BY_GPS_FAILURE
} from './../actions/pick-survey-actions';

const initialState = {
    isFetching: false,
    surveys: [],
    error: '',
    status: {}
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
    case GET_LOCATION_BY_ADDRESS_REQUEST:
        return Object.assign({}, state, {
            isFetching: true,
            status: {
                message: 'Trying to find you using an address',
                status: 'info'
            }
        });
    case GET_LOCATION_BY_ADDRESS_SUCCESS:
        return Object.assign({}, state, {
            isFetching: true,
            status: {
                message: 'Looking for surveys for that address',
                status: 'info'
            }
        });
    case GET_LOCATION_BY_ADDRESS_FAILURE:
        return Object.assign({}, state, {
            isFetching: true,
            status: {
                message: 'There was an error locating you with that address',
                status: 'danger'
            }
        });
    case GET_LOCATION_BY_GPS_REQUEST:
        return Object.assign({}, state, {
            isFetching: true,
            status: {
                message: 'Trying to find you using GPS',
                status: 'info'
            }
        });
    case GET_LOCATION_BY_GPS_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            status: {
                message: 'Looking for surveys in your area',
                level: 'info'
            }
        });
    case GET_LOCATION_BY_GPS_FAILURE:
        return Object.assign({}, state, {
            status: {
                message: 'There was an error finding you with GPS.\nTry searching with an address?',
                level: 'danger'
            }
        });
    default:
        return state;
    }
}
