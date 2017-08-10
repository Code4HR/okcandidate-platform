import {
  FETCH_CATEGORY_LIST_REQUEST,
  FETCH_CATEGORY_LIST_SUCCESS,
  FETCH_CATEGORY_LIST_FAILURE
} from '../actions/category-actions';

const initialState = {
    isFetching: false,
    categories: [],
    help: ''
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
            categories: action.response.map((c, i) => {
                return Object.assign({}, c, {
                    rank: i + 1
                });
            })
        });

    case FETCH_CATEGORY_LIST_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            help: action.response
        });

    default:
        return state;

    }

};
