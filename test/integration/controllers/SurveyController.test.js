'use strict';

const assert = require('assert');
const app = require('../../../index');

describe('SurveyController', () => {
    it('should exist', () => {
        assert(app.api.controllers.SurveyController);
    });
});
