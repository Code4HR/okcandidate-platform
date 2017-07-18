import fetch from 'isomorphic-fetch';
import checkStatus from './../utils/checkStatus';
import { gotoRoute } from './../actions/router-actions';

export const FETCH_SURVEYS_BY_LOCATION_REQUEST = 'FETCH_SURVEYS_BY_LOCATION_REQUEST';
export const FETCH_SURVEYS_BY_LOCATION_SUCCESS = 'FETCH_SURVEYS_BY_LOCATION_SUCCESS';
export const FETCH_SURVEYS_BY_LOCATION_FAILURE = 'FETCH_SURVEYS_BY_LOCATION_FAILURE';

export function fetchSurveysByLocationRequest() {
    return {
        type: FETCH_SURVEYS_BY_LOCATION_REQUEST
    };
}

export function fetchSurveysByLocationSuccess(response) {
    return {
        type: FETCH_SURVEYS_BY_LOCATION_SUCCESS,
        response
    };
}

export function fetchSurveysByLocationFailure(error) {
    return {
        type: FETCH_SURVEYS_BY_LOCATION_FAILURE,
        error
    };
}

export function fetchSurveysByLocation(coordinates) {
    return function(dispatch) {
        dispatch(fetchSurveysByLocationRequest());
        return fetch(`/api/v1/survey/location?coordinates=${JSON.stringify(coordinates)}`)
        .then(checkStatus)
        .then(response => response.json())
        .then(response => {
            dispatch(fetchSurveysByLocationSuccess(response));
            gotoRoute('/survey');
        })
        .catch(error => dispatch(fetchSurveysByLocationFailure(error)));
    };
}

export const GET_LOCATION_BY_ADDRESS_REQUEST = 'GET_LOCATION_BY_ADDRESS_REQUEST';
export const GET_LOCATION_BY_ADDRESS_SUCCESS = 'GET_LOCATION_BY_ADDRESS_SUCCESS';
export const GET_LOCATION_BY_ADDRESS_FAILURE = 'GET_LOCATION_BY_ADDRESS_FAILURE';

export function getLocationByAddress(address) {
    return function(dispatch) {
        dispatch(getLocationByAddressRequest());
        fetch(`/api/v1/geolocation?address=${address}`)
        .then(checkStatus)
        .then((response) => response.json())
        .then((response) => {
            // If there are no results
            if (!response.results.length) {
                return dispatch(getLocationByAddressFailure(
                    new Error('No results found')
                ));
            }
            // If there are multiple results
            else if (response.results.length > 1) {
                // TODO
                // Address disambiguation page
            }
            // If there is one result
            const coords = response.results[0].geometry.location;
            dispatch(getLocationByAddressSuccess(coords));
            return dispatch(fetchSurveysByLocation({
                latitude: coords.lat,
                longitude: coords.lng
            }));
        })
        .catch((error) => {
            return fetchSurveysByLocationFailure(error);
        });
    };
}

export function getLocationByAddressRequest() {
    return {
        type: GET_LOCATION_BY_ADDRESS_REQUEST
    };
}

export function getLocationByAddressSuccess(response) {
    return {
        type: GET_LOCATION_BY_ADDRESS_SUCCESS,
        response
    };
}

export function getLocationByAddressFailure(error) {
    return {
        type: GET_LOCATION_BY_ADDRESS_FAILURE,
        error
    };
}

export const GET_LOCATION_BY_GPS_REQUEST = 'GET_LOCATION_BY_GPS_REQUEST';
export const GET_LOCATION_BY_GPS_SUCCESS = 'GET_LOCATION_BY_GPS_SUCCESS';
export const GET_LOCATION_BY_GPS_FAILURE = 'GET_LOCATION_BY_GPS_FAILURE';

function onGeolocationSuccess(dispatch, timer, position) {
    clearTimeout(timer);
    dispatch(getLocationByGPSSuccess(position));
    dispatch(fetchSurveysByLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    }));
}

function onGeolocationFailure(dispatch, timer, positionError) {
    clearTimeout(timer);
    dispatch(getLocationByGPSFailure(positionError));
}

export function getLocationByGPS() {
    return function(dispatch) {
        dispatch(getLocationByGPSRequest());
        if (!navigator.geolocation) {
            dispatch(getLocationByGPSFailure(new Error('No support for geolocation')));
        }

        const timer = setTimeout(() => {
            dispatch(getLocationByGPSFailure(new Error('Request timed out')));
        }, 10000);
        navigator.geolocation.getCurrentPosition(
            onGeolocationSuccess.bind(this, dispatch, timer),
            onGeolocationFailure.bind(this, dispatch, timer)
        );
    };
}

export function getLocationByGPSRequest() {
    return {
        type: GET_LOCATION_BY_GPS_REQUEST
    };
}

export function getLocationByGPSSuccess(response) {
    return {
        type: GET_LOCATION_BY_GPS_SUCCESS,
        response
    };
}

export function getLocationByGPSFailure(error) {
    return {
        type: GET_LOCATION_BY_GPS_FAILURE,
        error
    };
}
