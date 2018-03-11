'use strict';

const assert = require('assert');
const app = require('../../../index');

describe('SurveyService', () => {
    it('should exist', () => {
        assert(app.api.services.SurveyService);
    });
});
