'use strict';

const Controller = require('trails-controller');
const fetch = require('node-fetch');
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const geocodingUrl = 'https://maps.google.apis.com/maps/api/geocode/json';

/**
 * @module GeolocationController
 * @description A controller for handling Geolocation requests.
 */
module.exports = class GeolocationController extends Controller {

    get(request, reply) {
        const address = JSON.stringify(request.query.address);

        fetch(`${geocodingUrl}?address=${address}&key=${GOOGLE_API_KEY}`)
            .then((response) => response.json())
            .then((response) => {
                reply(response);
            })
            .catch((error) => {
                reply(error);
            });
    }

};

