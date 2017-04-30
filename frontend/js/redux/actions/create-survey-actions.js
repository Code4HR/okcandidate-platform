import fetch from 'isomorphic-fetch'
import checkStatus from './../utils/checkStatus'

export const FETCH_CITIES_LIST_REQUEST = 'FETCH_CITIES_LIST_REQUEST'
export const FETCH_CITIES_LIST_SUCCESS = 'FETCH_CITIES_LIST_SUCCESS'
export const FETCH_CITIES_LIST_FAILURE = 'FETCH_CITIES_LIST_FAILURE'


export function fetchAllUsersRequest() {
  return {
    type: FETCH_CITIES_LIST_REQUEST
  }
}

export function fetchAllQuestionsSuccess(response) {
  return {
    type: FETCH_CITIES_LIST_SUCCESS,
    response
  }
}

export function fetchAllUsersFailure(response) {
  return {
    type: FETCH_CITIES_LIST_FAILURE,
    response
  }
}

export function fetchAllUsers() {
  return function(dispatch) {
    dispatch(fetchAllUsersRequest())
    return fetch('/api/v1/questions')
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(fetchAllUsersSuccess(response))
    })
    .catch(error => dispatch(fetchAllUsersFailure(error)))
  }
}