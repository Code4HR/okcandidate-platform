import {
    FETCH_CATEGORY_LIST_REQUEST,
    FETCH_CATEGORY_LIST_SUCCESS,
    FETCH_CATEGORY_LIST_FAILURE,
    SET_CATEGORY_ORDER
} from './../actions/category-actions';

import {
    FETCH_SURVEY_RESULT_SUCCESS,
    CREATE_SURVEY_RESULT_SUCCESS
} from './../actions/survey-actions';

const initialState = {
    isFetching: false,
    categories: [],
    SurveyResultCategories: [],
    help: '',
    SurveyResultId: null
};

export default (state = initialState, action) => {

    switch (action.type) {

    case FETCH_CATEGORY_LIST_REQUEST:
        return Object.assign({}, state, {
            isFetching: true
        });

    case FETCH_CATEGORY_LIST_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            categories: action.response
        });

    case FETCH_CATEGORY_LIST_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            help: action.respone
        });

    case CREATE_SURVEY_RESULT_SUCCESS:
        return Object.assign({}, state, {
            SurveyResultId: action.response.id
        });

    case FETCH_SURVEY_RESULT_SUCCESS:
        return Object.assign({}, state, {
            SurveyResultId: action.response.id,
            SurveyResultCategories: action.response.SurveyResultCategories
        });

    case SET_CATEGORY_ORDER:
        return Object.assign({}, state, {
            categories: action.categories,
            SurveyResultCategories: state.SurveyResultCategories.map(src => {
                src.rank = action.categories.findIndex(cat => cat.id === src.CategoryId) + 1;
                return src;
            })
        });

    default:
        return state;
    }
};
