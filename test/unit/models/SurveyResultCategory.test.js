'use strict';

const assert = require('assert');
const app = require('../../../index');

describe('SurveyResultCategory Model', () => {
    it('should exist', () => {
        assert(app.api.models.SurveyResultCategory);
    });
});
