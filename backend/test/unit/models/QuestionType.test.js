'use strict';

const assert = require('assert');
const app = require('../../../index');

describe('QuestionType Model', () => {
    it('should exist', () => {
        assert(app.api.models.QuestionType);
    });
});
