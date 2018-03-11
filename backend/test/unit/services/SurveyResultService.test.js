'use strict';

const assert = require('assert');
const app = require('../../../index');

describe('SurveyResultService', () => {
    it('should exist', () => {
        assert(app.api.services.SurveyResultService);
    });
});
