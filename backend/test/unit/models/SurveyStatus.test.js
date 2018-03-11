'use strict';

const assert = require('assert');
const app = require('../../../index');

describe('SurveyStatus Model', () => {
    it('should exist', () => {
        assert(app.api.models.SurveyStatus);
    });
});
