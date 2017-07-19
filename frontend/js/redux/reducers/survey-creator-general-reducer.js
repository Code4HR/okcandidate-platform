'use strict';

import {
    SET_SURVEY_NAME,
    SET_SURVEY_START_DATE,
    SET_SURVEY_END_DATE,
    SELECT_QUESTION_TYPE,
    TOGGLE_REGION_LIMIT,
    FETCH_QUESTION_TYPES_REQUEST,
    FETCH_QUESTION_TYPES_SUCCESS,
    FETCH_QUESTION_TYPES_FAILURE,
    FETCH_SURVEY_GENERAL_INFO_REQUEST,
    FETCH_SURVEY_GENERAL_INFO_SUCCESS,
    FETCH_SURVEY_GENERAL_INFO_FAILURE,
    UPDATE_SURVEY_GENERAL_INFO_REQUEST,
    UPDATE_SURVEY_GENERAL_INFO_SUCCESS,
    UPDATE_SURVEY_GENERAL_INFO_FAILURE
} from './../actions/survey-creator-general-actions';

const initialState = {
    isFetching: false,
    id: '',
    error: '',
    name: '',
    startDate: '',
    endDate: '',
    questionTypes: [],
    questionTypeId: null,
    regionLimit: false
};

function getDateString(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SURVEY_NAME:
            return Object.assign({}, state, {
                name: action.name
            });
        case SET_SURVEY_START_DATE:
            return Object.assign({}, state, {
                startDate: action.startDate
            });
        case SET_SURVEY_END_DATE:
            return Object.assign({}, state, {
                endDate: action.endDate
            });
        case SELECT_QUESTION_TYPE:
            return Object.assign({}, state, {
                questionTypeId: action.id
            });
        case TOGGLE_REGION_LIMIT:
            return Object.assign({}, state, {
                regionLimit: !state.regionLimit
            });
        case FETCH_QUESTION_TYPES_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                error: ''
            });
        case FETCH_QUESTION_TYPES_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                questionTypes: action.response 
            });
        case FETCH_QUESTION_TYPES_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            });
        case FETCH_SURVEY_GENERAL_INFO_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                error: ''
            });
        case FETCH_SURVEY_GENERAL_INFO_SUCCESS:
            return Object.assign({}, state, {
                id: action.response.id,
                isFetching: false,
                name: action.response.name,
                startDate: getDateString(action.response.startDate),
                endDate: getDateString(action.response.endDate),
                questionTypeId: action.response.QuestionTypeId,
                regionLimit: action.response.regionLimit
            });
        case FETCH_SURVEY_GENERAL_INFO_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            });
        default: 
            return state;
    }
}
