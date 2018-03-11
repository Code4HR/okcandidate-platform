'use strict';

const assert = require('assert');
const app = require('../../../index');

describe('Survey', () => {
    it('should exist', () => {
        assert(app.api.policies.Survey);
    });
});
