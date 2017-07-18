'use strict';

const assert = require('assert');
const app = require('../../../index');

describe('GeolocationController', () => {
    it('should exist', () => {
        assert(app.api.controllers.GeolocationController);
    });
});
