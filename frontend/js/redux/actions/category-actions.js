import fetch from 'isomorphic-fetch';
import checkStatus from './../utils/checkStatus';
import getIsoUrl from './../utils/getIsoUrl';

export const FETCH_CATEGORY_LIST_REQUEST = 'FETCH_CATEGORY_LIST_REQUEST';
export const FETCH_CATEGORY_LIST_SUCCESS = 'FETCH_CATEGORY_LIST_SUCCESS';
export const FETCH_CATEGORY_LIST_FAILURE = 'FETCH_CATEGORY_LIST_FAILURE';

export function fetchCategoryListRequest() {
    return {
        type: FETCH_CATEGORY_LIST_REQUEST
    };
}

export function fetchCategoryListSuccess(response) {
    return {
        type: FETCH_CATEGORY_LIST_SUCCESS,
        response
    };
}

export function fetchCategoryListFailure(response) {
    return {
        type: FETCH_CATEGORY_LIST_FAILURE,
        response
    };
}

export function fetchCategoryList() {
    return function(dispatch) {
        dispatch(fetchCategoryListRequest());
        return fetch(getIsoUrl('/api/v1/category'))
            .then(checkStatus)
            .then(response => response.json())
            .then(response => {
                dispatch(fetchCategoryListSuccess(response));
            })
            .catch(error => dispatch(fetchCategoryListFailure(error)));
    };
}
